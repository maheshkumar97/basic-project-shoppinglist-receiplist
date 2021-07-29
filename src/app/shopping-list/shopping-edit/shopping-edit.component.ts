import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('inputName') inputName: ElementRef;
  // //inputName: string;
  // @ViewChild('inputAmount') inputAmount: ElementRef;
  // //@Output() addedIngredient = new EventEmitter<Ingredient>();

  @ViewChild('form') editForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemindex: number;
  ingredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.editableSubject.subscribe(
      (index: number) => {
        this.editItemindex = index;
        this.editMode = true;
        //console.log(this.shoppingListService.getIngredient(index));
        this.ingredient = this.shoppingListService.getIngredient(index);
        console.log(index + ' ' + JSON.stringify(this.ingredient));
        this.editForm.setValue({
          inputName: this.ingredient.name,
          inputAmount: this.ingredient.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    //const ingName = this.inputName;
    // const ingName = this.inputName.nativeElement.value;
    // const ingAmount = this.inputAmount.nativeElement.value;

    // Adding Test driven form
    const value = form.value;
    const ingredient = new Ingredient(value.inputName, value.inputAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemindex, ingredient);
      // this.editMode = false;
      // this.editForm.onReset();
      // this.editItemindex = -1;
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.onClear();
    // this.addedIngredient.emit(ingredient);
  }
  onClear() {
    this.editMode = false;
    this.editForm.onReset();
    this.editItemindex = -1;
  }
  onDelete(index: number) {
    this.shoppingListService.deleteIngredient(this.editItemindex);
    this.onClear();
  }
}
