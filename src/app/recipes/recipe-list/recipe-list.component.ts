import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Testing First recipe',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'Testing First recipe',
      'https://cdn.pixabay.com/photo/2014/05/23/23/17/dessert-352475_1280.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
