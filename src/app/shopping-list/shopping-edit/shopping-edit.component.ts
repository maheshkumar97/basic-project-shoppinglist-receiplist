import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit() {}

  onAdded() {
    const ingName = this.inputName.nativeElement.value;
    const ingAmount = this.inputAmount.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);

    this.addedIngredient.emit(ingredient);
  }
}
