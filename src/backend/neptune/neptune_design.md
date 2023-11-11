# Neptune Database Schema  <!-- omit from toc -->

This document outlines the design details of the data that will be stored in our graph database

## Contents  <!-- omit from toc -->

- [Nodes \& Relationships](#nodes--relationships)
  - [Meal Nodes](#meal-nodes)
    - [Node Properties](#node-properties)
    - [Outgoing Edges](#outgoing-edges)
    - [Incoming Edges](#incoming-edges)
  - [User Nodes](#user-nodes)
    - [Node Properties](#node-properties-1)
    - [Outgoing Edges](#outgoing-edges-1)
    - [Incoming Edges](#incoming-edges-1)
  - [Ingredient Nodes](#ingredient-nodes)
    - [Node Properties](#node-properties-2)
    - [Outgoing Edges](#outgoing-edges-2)
    - [Incoming Edges](#incoming-edges-2)
  - [Allergen Nodes](#allergen-nodes)
    - [Node Properties](#node-properties-3)
    - [Outgoing Edges](#outgoing-edges-3)
    - [Incoming Edges](#incoming-edges-3)
  - [Category Nodes](#category-nodes)
    - [Node Properties](#node-properties-4)
    - [Outgoing Edges](#outgoing-edges-4)
    - [Incoming Edges](#incoming-edges-4)
  - [Nutrient Nodes](#nutrient-nodes)
    - [Node Properties](#node-properties-5)
    - [Outgoing Edges](#outgoing-edges-5)
    - [Incoming Edges](#incoming-edges-5)
# Nodes & Relationships

The sections below outline the properties related to each type of node and the relationships we plan for them to have.

Relationships between nodes are described in the format `source -[label]-> destination`.

## Meal Nodes

For meals, the majority of the text information to be shown to the user will be stored in JSON format in S3. That data is outlined [here](../s3/meal_data.md).

### Node Properties 

| Name  | Description                         | Type   |
| :---- | :---------------------------------- | :----- |
| id    | UUID generated by Neptune           | String |
| label | "meal", describing the type of node | String |
| name  |                                     | String |


### Outgoing Edges

| Relationship                    | Edge Properties   |
| :------------------------------ | :---------------- |
| `meal -[contains]-> ingredient` | `quanity: Number` |

### Incoming Edges

| Relationship                  | Edge Properties                    |
| :---------------------------- | :--------------------------------- |
| `user -[hasViewed]-> meal`    | `lastViewed: Number` (Timestamp)   |
| `user -[hasSaved]-> meal`     |                                    |
| `user -[rates]-> meal`        | `rating: Number` (between 0 and 5) |
| `user -[hasCooked]-> meal`    | `lastCooked: Number` (Timestamp)   |
| `category -[contains]-> meal` |                                    |


## User Nodes

### Node Properties

| Name | Description               | Type   |
| :--- | :------------------------ | :----- |
| id   | UUID generated by Neptune | String |

### Outgoing Edges

| Relationship                    | Edge Properties                    |
| :------------------------------ | :--------------------------------- |
| `user -[hasViewed]-> meal`      | `lastViewed: Number` (Timestamp)   |
| `user -[hasSaved]-> meal`       |                                    |
| `user -[rates]-> meal`          | `rating: Number` (between 0 and 5) |
| `user -[hasCooked]-> meal`      | `lastCooked: Number` (Timestamp)   |
| `user -[likes]-> category`      |                                    |
| `user -[dislikes]-> category`   |                                    |
| `user -[hasViewed]-> category`  | `lastViewed: Number`               |
| `user -[likes]-> ingredient`    |                                    |
| `user -[dislikes]-> ingredient` |                                    |
| `user -[allergicTo]-> allergen` |                                    |

### Incoming Edges

At present, there are no incoming edges to user nodes. If we consider adding a social element to Cookly in the future, there may be "follows" edges between users, for example.

## Ingredient Nodes

**ALL INGREDIENT RELATIONSHIPS AND STORED VALUES WILL BE IN TERMS OF GRAMS**

### Node Properties

| Name        | Description               | Type   |
| :---------- | :------------------------ | :----- |
| id          | UUID generated by Neptune | String |
| name        |                           | String |

### Outgoing Edges

| Relationship                               | Edge Properties |
| :----------------------------------------- | :-------------- |
| `ingredient -[substituteFor]-> ingredient` |                 |

### Incoming Edges

| Relationship                        | Edge Properties    |
| :---------------------------------- | :----------------- |
| `user -[likes]-> ingredient`        |                    |
| `user -[dislikes]-> ingredient`     |                    |
| `meal -[contains]-> ingredient`     | `quantity: Number` |
| `allergen -[includes]-> ingredient` |                    |

## Allergen Nodes

It may be worth considering adding "meat" and "gluten" etc as allergen nodes so we can filter by non-allergenic dietary preferences such as gluten intolerance and veganism. 

### Node Properties

| Name | Description                 | Type   |
| :--- | :-------------------------- | :----- |
| id   | UUID generated by Neptune   | String |
| name | Name of allergen eg "dairy" | String |

### Outgoing Edges

| Relationship                        | Edge Properties                    |
| :---------------------------------- | :--------------------------------- |
| `allergen -[includes]-> ingredient` | i.e: `dairy -[includes]-> cheddar` |

### Incoming Edges

| Relationship                     | Edge Properties |
| :------------------------------- | :-------------- |
| `user -[allergicTo]-> allergen ` |                 |

## Category Nodes

### Node Properties

| Name | Description               | Type   |
| :--- | :------------------------ | :----- |
| id   | UUID generated by Neptune | String |
| name |                           | String |

### Outgoing Edges

| Relationship                  | Edge Properties |
| :---------------------------- | :-------------- |
| `category -[contains]-> meal` |                 |

### Incoming Edges

| Relationship                   | Edge Properties                  |
| :----------------------------- | :------------------------------- |
| `user -[likes]-> category`     |                                  |
| `user -[dislikes]-> category`  |                                  |
| `user -[hasViewed]-> category` | `lastViewed: Number` (Timestamp) |

## Nutrient Nodes

### Node Properties

| Name        | Description   | Type    |
| :---------- | :------------ | :------ |
| name        | e.g "protein" | String  |
| calsPerGram |               | Integer |

### Outgoing Edges

At present, there are no outgoing edges planned for nutrient nodes 

### Incoming Edges

| Relationship                        | Edge Properties                                     |
| :---------------------------------- | :-------------------------------------------------- |
| `ingredient -[contains]-> nutrient` | `quantity: Number` / `unit: String` (e.g "g", "mg") |