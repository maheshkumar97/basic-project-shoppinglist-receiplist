import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  subscription: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.subscription = this.recipeService.onSelected.subscribe(
      (recipe: Recipe) => {
        console.log(recipe);
        this.selectedRecipe = recipe;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
