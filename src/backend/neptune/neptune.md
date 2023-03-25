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

## Allergens Design Choice
![](./Allergen%20Design.png)