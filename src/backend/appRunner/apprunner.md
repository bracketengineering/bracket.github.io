<h1> App Runner API Reference </h1>

<h4> Endpoints </h4>

- [Account Page](#account-page)
    - [getAccountMeals](#getaccountmeals)
        - [Request](#request)
        - [Response](#response)
        - [Container function definition](#container-function-definition)
        - [API Endpoint Path](#api-endpoint-path)
    - [getUserAllergens](#getuserallergens)
        - [Request](#request-1)
        - [Response](#response-1)
        - [Container function definition](#container-function-definition-1)
        - [API Endpoint Path](#api-endpoint-path-1)
- [Explore Page](#explore-page)
    - [getExplorePage](#getexplorepage)
        - [Request](#request-2)
        - [Response](#response-2)
        - [Container function definition](#container-function-definition-2)
        - [API Endpoint Path](#api-endpoint-path-2)
    - [getMealsInCategory](#getmealsincategory)
        - [Request](#request-3)
        - [Response](#response-3)
        - [Container function definition](#container-function-definition-3)
        - [API Endpoint Path](#api-endpoint-path-3)
- [General](#general)
    - [getCategories](#getcategories)
        - [Request](#request-4)
        - [Response](#response-4)
        - [Container function definition](#container-function-definition-4)
        - [API Endpoint Path](#api-endpoint-path-4)
    - [getMealInfo](#getmealinfo)
        - [Request](#request-5)
        - [Response](#response-5)
        - [Container function definition](#container-function-definition-5)
        - [API Endpoint Path](#api-endpoint-path-5)
    - [OutputCustomNeptuneMeal](#outputcustomneptunemeal)
    - [OutputNeptuneMeal](#outputneptunemeal)
    - [OutputNeptuneIngredient](#outputneptuneingredient)
    - [OutputNeptuneMacroData](#outputneptunemacrodata)
    - [OutputNeptuneCategory](#outputneptunecategory)
    - [ExplorePageLimitsAndLPs](#explorepagelimitsandlps)

<h4> Types </h4>

  - [OutputCustomNeptuneMeal](#outputcustomneptunemeal)
  - [OutputNeptuneMeal](#outputneptunemeal)
  - [OutputNeptuneIngredient](#outputneptuneingredient)
  - [OutputNeptuneMacroData](#outputneptunemacrodata)
  - [OutputNeptuneCategory](#outputneptunecategory)
  - [ExplorePageLimitsAndLPs](#explorepagelimitsandlps)

<!-- #### Types
- [OutputNeptuneMeal](#outputneptunemeal)  -->
---
<h1> Endpoints </h1>

## Account Page

#### getAccountMeals

<details>
  
###### Request
```go
{
    "userID":   string
    "limit":    int
    "lastPage": int
}
```

###### Response
```go
{
    "savedMeals": [OutputNeptuneMeal]
    "limit":      int
    "lastPage":   int
}
```
- [OutputNeptuneMeal](#outputneptunemeal)

###### Container function definition
```go
func (p *ConnPool) GetAccountMeals(c *gin.Context) 
```

###### API Endpoint Path
```go
"/accountPage/getAccountMeals"
```
</details>



#### getUserAllergens

<details>
  
###### Request
```go
{
    "userID":   string
}
```

###### Response
```go
{
    "allergens": [OutputNeptuneAllergen]
}
```
- [OutputNeptuneAllergen](#outputneptuneallergen)

###### Container function definition
```go
func (p *ConnPool) GetUserAllergens(c *gin.Context) 
```

###### API Endpoint Path
```go
"/accountPage/getUserAllergens"
```
</details>




## Explore Page

#### getExplorePage

<details>
  
###### Request
```go
{
    "userID":   string
    "limits":   ExplorePageLimitsAndLPs
    "lastPages": ExplorePageLimitsAndLPs
}
```
- [ExplorePageLimitsAndLPs](#explorepagelimitsandlps)
###### Response
```go
{	
  "genericRecommendation":  OutputNeptuneMeal
  "mealRecommendations":    OutputNeptuneMeal
  "standardCategories":     OutputNeptuneMeal
  "recentCategories":       OutputNeptuneMeal
  "recentMeals":            OutputNeptuneMeal
  "recentCookedMeals":      OutputNeptuneMeal
  "savedMeals":             OutputNeptuneMeal
  "lastPage":               ExplorePageLimitsAndLPs
}
```
- [OutputNeptuneMeal](#outputneptunemeal)
- [ExplorePageLimitsAndLPs](#explorepagelimitsandlps)

###### Container function definition
```go
func (p *ConnPool) GetExplorePage(c *gin.Context) 
```

###### API Endpoint Path
```go
"/explorePage/getExplorePage"
```
</details>


#### getMealsInCategory
<details>

###### Request
```go
{
    "userID":     string
    "categoryID": string
    "limit":      int
    "lastPage":   int
}
```

###### Response
```go
{
  "meals":    [OutputNeptuneMeals]
  "lastPage": int
}
```
- [OutputNeptuneMeal](#outputneptunemeal)

###### Container function definition
```go
func (p *ConnPool) GetMealsInCategory(c *gin.Context) 
```

###### API Endpoint Path
```go
"/explorePage/getMealsInCategory"
```
</details>

## General

#### getCategories

<details>

###### Request 
```go
{
    "limit":    int
    "lastPage": int
}
```

###### Response 
```go
[OutputNeptuneCategory]
```
- [OutputNeptuneCategory](#outputneptunecategory)

###### Container function definition
```go
func (p *ConnPool) GetCategories(c *gin.Context) 
```

###### API Endpoint Path
```go
"/explorePage/getCategories"
```

</details>

#### getMealInfo

<details>

###### Request
```go
{
   "mealID": string 
}
```
###### Response
```go
{  
    "itemID":     string
    "itemName":   string
    "itemType":   string
    "difficulty": string
}
```

###### Container function definition
```go
func (p *ConnPool) GetMealInfo(c *gin.Context) 
```

###### API Endpoint Path
```go
"/explorePage/getMealInfo"
```
</details>

---

<h1> Types </h1>

#### OutputCustomNeptuneMeal
```go
{
    "itemID":      string
    "itemName":    string
    "itemType":    string
    "ingredients": [OutputNeptuneIngredient]
}
```

#### OutputNeptuneMeal
```go
{
    "itemID":       string
    "itemName":     string
    "itemType":     string
    "difficulty":   string
    "userHasSaved": bool
}
```

#### OutputNeptuneIngredient
```go
{
    "itemID":      string
    "itemName":    string
    "itemType":    string
    "quantity":    int
    "unit":        string
    "macroData":   [OutputNeptuneMacroData]
}
```

#### OutputNeptuneMacroData
```go
{
    "itemID":      string
    "itemName":    string
    "quantity":    int
    "unit":        string
}
```
#### OutputNeptuneCategory
```go
{
    "itemID":   string
    "itemName": string
}
```

#### ExplorePageLimitsAndLPs
```go 
{
  "genericRecommendations": int
  "mealRecommendations":    int
  "standardCategories":     int
  "recentCategories":       int
  "recentMeals":            int
  "recentCookedMeals":      int
  "savedMeals":             int
}
```