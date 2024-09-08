
import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class RecipeService{
  recipeSelected = new Subject<Recipe>();
  private  recipes : Recipe[] = [
        new Recipe ('A test rcipe'  , 'This is simply a test' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtgT70fLW07_BQ-ElLv0A_TMXTp5sDP5QpA&s' , [
          new Ingredient ('Meat', 1),
          new Ingredient ('French Fries', 20)
        ]),
        new Recipe ('Another test rcipe'  , 'This is simply a test' , 'https://www.budgetbytes.com/wp-content/uploads/2020/09/Cajun-Sausage-and-Rice-Skillet-front.jpg' , [
          new Ingredient ('Buns', 2),
          new Ingredient ('Meat', 1)
        ])
      ];

      constructor(private slService : ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number){
   return this.recipes[index];
      }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
    }
}
