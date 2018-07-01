import {Recipes} from './recipes.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import index from '@angular/cli/lib/cli';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipes>();
  private recipes: Recipes[] = [
    new Recipes('icecream','simple test','https://i.pinimg.com/originals/1c/85/2f/1c852fba1d2dc24d6e55727ef4a90c38.jpg',[
      new Ingredient('sugar',10),
        new Ingredient('creamy',10)
      ]),
    new Recipes('recipe1','simple test','https://cdn.pixabay.com/photo/2015/07/31/12/07/soup-greens-869075_1280.jpg',[
      new Ingredient('sugar',10),
        new Ingredient('creamy',10)
      ]),
    new Recipes('recipe2','simple test2','https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_960_720.jpg',[
      new Ingredient('sugar',9),
      new Ingredient('creamy',9)
    ])
  ];

  constructor(private slservice: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe( index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slservice.addIngredients(ingredients);
  }
}
