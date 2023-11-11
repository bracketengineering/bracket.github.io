# Neptune Macros <!-- omit from toc -->

## Contents <!-- omit from toc -->
- [Data Sources](#data-sources)
  - [Quadram Institute CoFID](#quadram-institute-cofid)
  - [Nutritionix Common UK Foods Database](#nutritionix-common-uk-foods-database)
  - [OpenFoodFacts Database](#openfoodfacts-database)
- [Method of Data Collection/Cleaning](#method-of-data-collectioncleaning)


## Data Sources

### Quadram Institute CoFID
Information [here](https://quadram.ac.uk/UKfoodcomposition/)
- Free to use commercially with government license
  - Only have to state source and reference [this license](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
- Contains 3,200 common food items.
- Available for bulk download as Excel spreadsheet.

### Nutritionix Common UK Foods Database
Information [here](https://www.nutritionix.com/database)

- Contains 10,500 foods (with 38,000 names, so some foods with multiple names)
- Available for bulk download with price quoted on request.
- To gauge idea of bulk price, cheapest paid API access is $500 per month.
- There is however a free tier which allows access to barcode scanning and the database, with attribution required.

### OpenFoodFacts Database
  - Has a significant advantage in that it is linked to barcodes, which may allow us to replicate the functionality of MyFitnessPal.
  - Contains nearly 3 million products across many countries.
  - Free to use commercially, with attribution required and under [this license](https://opendatacommons.org/licenses/odbl/1-0/)


## Method of Data Collection/Cleaning

- When uploading a meal, upload its ingredients (if they don't exist) to neptune, getting the macro information from our data source(s) to do so.
  - **Why not upload macros & ingredients in bulk?** 
  - It is likely we will only ever utilise a small portion of the databases we reference for macros, so populating Neptune with a load of unused data will be wasteful and pointless. For example, when discussing chicken breast, we only want standard versions like "raw", "skin on", etc, rather than specific versions like "cooked in broth".
- Use our ChatGPT API setup to standardise ingredient names, and match ingredients from recipes to those in the datasets.
- Make links between meal/ingredients and macros to specify the quantity they contain.
- By structuring the data as links between Meal, Ingredient and Nutrient nodes, with edge values being quantities involved, we can extract and return information in the format required by the frontend (pasted below for reference).
- **For reference**: All nutrient information for all ingredients will be standardised to **"per 100g"** for ease of processing.

```typescript
interface NeptuneIngredient {
  itemID: NeptuneID;
  macroData: Array<NeptuneMacro>;
}

interface NeptuneMacro {
  itemID: NeptuneID;
  macroName: string;
  quantity: number;
  unit: string;
}

// UUID of item in neptune
type NeptuneID = string;
```
