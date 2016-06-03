import {Food} from './food.model';
import {Component} from 'angular2/core';
import {FoodDisplayComponent} from './food-display.component';

@Component({
  selector: 'food-list-display',
  inputs: ['foodList'],
  directives: [FoodDisplayComponent],
  template:`
  <div class="row">
    <h3 class="col-sm-2">Name</h3>
    <h3 class="col-sm-4">Details</h3>
    <h3 class="col-sm-2">Calories</h3>
  </div>
  <food-display *ngFor="#currentFood of foodList" [food]='currentFood'></food-display>
  `
})

export class FoodListDisplayComponent{
  public foodList = [];
  public food: Food;
  constructor(){}
}
