import {Food} from './food.model';
import {Component} from 'angular2/core';
import {FoodDisplayComponent} from './food-display.component';
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: 'food-list-display',
  inputs: ['foodList'],
  pipes: [CaloriesPipe],
  directives: [FoodDisplayComponent],
  template:`
  <div class="row">
    <h3 class="col-sm-2">Name</h3>
    <h3 class="col-sm-4">Details</h3>
    <h3 class="col-sm-2">Calories</h3>
    <select class="col-sm-3" (change)='onChange($event.target.value)'>
      <option value="all">Display All</option>
      <option value="Over 500">Display High Calorie (500+) Foods</option>
    </select>
  </div>
  <food-display *ngFor="#currentFood of foodList | calories:filterChoice" [food]='currentFood'></food-display>
  `
})

export class FoodListDisplayComponent{
  public foodList = [];
  public filterChoice: string;
  public food: Food;
  constructor(){}
  onChange(option: string){
    this.filterChoice = option;
  }
}
