
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



---

## Types

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