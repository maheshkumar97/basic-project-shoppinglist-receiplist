import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  onSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'French fries',
      'Home made yummy frech fries...',
      'https://cdn.pixabay.com/photo/2014/01/23/19/34/french-fries-250641_960_720.jpg',
      [
        new Ingredient('Potatoes', 2),
        new Ingredient('Chilli powder pockets', 2),
        new Ingredient('Vegetable Oil teaspoons', 4)
      ]
    ),
    new Recipe(
      'Hungey Burger',
      'What else you do when there a burger...',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
      [
        new Ingredient('Bun', 2),
        new Ingredient('Cheese cups', 3),
        new Ingredient('Ground Meat', 3)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientstoShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredienttoShoppingList(ingredient);
  }
}
