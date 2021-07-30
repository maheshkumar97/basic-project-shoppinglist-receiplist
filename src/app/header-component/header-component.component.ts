import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { TestDataService } from '../shared/test-data.service';

export interface IRecipe {
  id: Number;
  recipe: Recipe;
}
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  // @Output() featureSelected = new EventEmitter<string>();
  // constructor() {}
  // ngOnInit() {}
  // onSelect(navSelected: string) {
  //   this.featureSelected.emit(navSelected);
  // }
  testRecipe = new Recipe(
    'French fries',
    'Home made yummy frech fries...',
    'https://cdn.pixabay.com/photo/2014/01/23/19/34/french-fries-250641_960_720.jpg',
    [
      new Ingredient('Potatoes', 2),
      new Ingredient('Chilli powder pockets', 2),
      new Ingredient('Vegetable Oil teaspoons', 4)
    ]
  );

  recipe = { id: 2, recipe: this.testRecipe };
  url = 'api/recipes';
  constructor(
    //private testDataService: TestDataService,
    private httpClient: HttpClient
  ) {}

  onSave() {
    console.log('On save ' + JSON.stringify(this.testRecipe));
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    this.httpClient
      .post<Recipe>(this.url, this.recipe, options)
      .subscribe(data => {
        console.log(data);
      });
  }
  onFetch() {
    this.httpClient.get<Recipe[]>(this.url).subscribe((recipes: Recipe[]) => {
      console.log(recipes);
    });
  }
}
