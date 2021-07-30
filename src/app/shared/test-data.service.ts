import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable()
export class TestDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let recipes = [
      {
        name: 'French fries',
        description: 'Home made yummy frech fries...',
        imagePath:
          'https://cdn.pixabay.com/photo/2014/01/23/19/34/french-fries-250641_960_720.jpg',
        ingredients: [
          { name: 'Potatoes', amount: 2 },
          { name: 'Chilli powder pockets', amount: 2 },
          { name: 'Vegetable Oil teaspoons', amount: 4 }
        ]
      },
      {
        name: 'Hungey Burger',
        description: 'What else you do when there a burger...',
        imagePath:
          'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
        ingredients: [
          { name: 'Bun', amount: 2 },
          { name: 'Chese Cups', amount: 3 },
          { name: 'Ground Meat', amount: 4 }
        ]
      }
    ];
    return { recipes: recipes };
  }
}
