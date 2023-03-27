# Neptune Design Proposal

## Why Use A Graph Database?

Graph Databases are superior to Relational Databases when the importance of the data is within the **relationships.**

Since most of our search queries will relate to the way `Meals`, `Ingredients`, `Categories` and `Users` relate to one another, this seems like the obvious choice.

Graph Databases prove to be highly performant with large datasets, and complex queries can be constructed with relative ease compared to Relational Databases.

Relational Databases are based on constraints and rigid rules, meaning they can only answer the questions they were designed for. Graph Databases, on the other hand, can answer unpredictable questions after they have been implemented, provided there are enough relationships present.

Graph Databases allow us to easily spot indirect links between entities, allowing greater understanding of the dataset and allowing a wider range of inferences to be made about the data.

Graph Databases are also extremely useful for recommendation systems, and AWS Neptune has Machine Learning functionality that we can use out of the box to make more accurate and informed recommendations.

For all of the above reasons, we have chosen to use AWS Neptune to store a graph database for Cookly along with Apache Tinkerpop Gremlin as the main query language.

## Premises Of Our Database Design

In order to reduce response time, increase ease-of-use and reduce data redundancy, as much of our data as possible should be stored in the same format and in the same source, within appropriate bounds. To adhere to this, I plan to include all Cookly data, apart from user metadata, in Neptune.

**Any** interaction or relationship between two entities in our database **must** be represented as an edge in the graph. Having this variety of relationships will make queries easier and allow us to draw all kinds of conclusions from the dataset in the future.

If multiple entities share a common property where the property is itself an entity, it should be separated out into its own entity and linked to the parent items via edges. (I.e meals and their ingredients)

# The Actual Design
![](./Neptune%20Design.png)

The above schema outlines the core elements of our database. If, in future, any more link types/entity types are required, they can be added with relative ease.

## Allergens Design Choice
![](./Allergen%20Design.png)

We must make sure we don't recommend meals that contain a user's allergens to them, or we must offer substitutions for the allergen ingredients.

For context: There are 14 allergens outlined by the Food Standards Agency that must be disclosed in food content labelling. These allergens include many different ingredients that all contain the same compound that causes an allergic reaction.

In order to determine whether a meal has an allergen in it or not, it may be instinctive to have a `meal -[contains]-> allergen` relationship. This, however, is problematic.

If we were to link meals directly to allergens, we would have to check if any of the ingredients in a meal are allergens, and then if so, make a link to the allergen.

This would require storing data about which ingredients are allergens somewhere. The most logical place to store this information is on the graph.

However if we already have links between ingredients and allergens and ingredients and meals, the indirect relationship between a meal and an allergen class can be inferred and is not necessary to be stored.

To reduce the number of links stored in the graph, I am choosing to only include links between ingredients and allergens, rather than meals and allergens. The process of checking if a meal contains allergens is still relatively simple, and it means we have less links that represent the same relationship.

## How Will Our Already Existing Features Work With The New Design?

The following table outlines how some of our current features will change and be better when using the new graph design.

**Note**: Any reference to `N` is implying a `limit` on the number of returned results.

| Feature/Function | Old Implementation                                                                  | Implementation                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| getAccountMeals  | Get recent & saved meals from separate dynamo tables, extract their IDs using a .map(), then return | Get `N` meals with "hasSaved" and "hasCooked" linked to user, sorted by "timeSaved" and "lastCooked" timestamps. All in one query. |
| getExplorePage | Make 3 separate calls to dynamo, followed by two calls to Neptune | Same as above, also getting recently viewed categories and `N` regular categories. Maximum 2 or 3 queries. |
| getMealsInCategories | One neptune query that has to check individual node properties | One neptune query that just has to look for links to a category |
| getQMSearch | One neptune query, with the results having to be processed and sorted on the Lambda. | One neptune query, with the results being sorted and processed on the neptune instance |

# Answering Your Questions

Below are some questions I anticipate being asked, and their answers.

### Performance/Speed?

As mentioned above, graph databases are extremely performant even with large datasets due to the simple nature of their underlying design. Even with a large amount of users, meals and ingredients, our system will be able to handle it (provided the Neptune Instance computing power is sufficient).

### Pagination?

As our database grows, returning all the matching values to a query would be data and time intensive. Fortunately, Gremlin allows us to return only a chunk of the data that matches a query, and the position in the pagination process can be stored clientside. I will design the whole neptune client with pagination in mind. The way Gremlin handles pagination also has the added benefit of being stateless, meaning we can request a page of data, and then wait an indefinite amount of time before requesting the next one without keeping Neptune busy.

### Recommendations?

To begin with, we can make basic "dumb" recommendations that just infer indirect links between users and meals by traversing from a user to a meal, to other users, to new, recommended meals.
In future, we can implement Neptune ML easily on top of our graph database without having to make any changes to its design.

### Where Will The Code Run?

I plan on rewriting our JavaScript Neptune client in the same format, with the intention of it being used on Lambda functions. 
Since it is a JavaScript module, it will also be suitable to run on an EC2 instance without any modifications should we deem that necessary.

### Macro Tracking?

Meals can have their total macros per serving stored as a property on the meal node, so we can instantly get the macro breakdown for any meal.
The ingredient nodes will also have their macros stored as properties so that we can automatically calculate the macros of a new meal when it is added to the database.
The advantage of having macros stored in the database is that we can make meal recommendations based on macronutrient requirements.

**To Consider**: Maybe having macronutrients as their own nodes? In that case, we could search for "protein >=50g per serving" meals by traversing from the Protein node, rather than having to traverse **every** meal and check its protein content. Consider this and let me know what you think.

### Budgeting?

We could either have ingredients store price data as node properties, or we could have a node for retailers, with their link to inredients representing the sale price and quantity. We could then traverse `ingredient -[soldBy]-> retailer` to discover the cheapest places to buy the ingredients, and calculate the cost of each meal. How we collect and maintain the price data is another question, though. Let me know your thoughts.

### Meal Planning?

Although it is possible to store meal plans in the graph, it may be easier to have them stored elsewhere as they are simply collections of meals. However we choose to store them, the graph database would make it extremely easy to generate meal plans for users based on their macronutrient, budget or other needs.

### One Final Proposal

The JSON that stores a meal's information (not including the image) comes to an average size of about 500 bytes. Should we store this information as a node property, so the title and basic info of a meal can be returned and displayed to the client without waiting for the image to be returned from s3? It won't make much of a difference to the way our system works, but I think the potential benefit in user experience might be worth it. Particularly when internet connection is poor, a user won't have to wait for the image to download to see the meal's info, which will likely improve their experience.