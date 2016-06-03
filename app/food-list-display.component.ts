import {Food} from './food.model';
import {Component} from 'angular2/core';
import {FoodDisplayComponent} from './food-display.component';
import {EditFoodDisplayComponent} from './edit-food-display.component';
import {CaloriesPipe} from './calories.pipe';
import {TotalCalorieDisplayComponent} from './total-calorie-display.component';

@Component({
  selector: 'food-list-display',
  inputs: ['foodList'],
  pipes: [CaloriesPipe],
  directives: [FoodDisplayComponent, EditFoodDisplayComponent, TotalCalorieDisplayComponent],
  template:`
  <div class="row">
    <h3 class="col-sm-2">Name</h3>
    <h3 class="col-sm-4">Details</h3>
    <h3 class="col-sm-2">Calories</h3>
    <div class="col-sm-3">
      <select class="filterBox form-control" (change)='onChange($event.target.value)'>
        <option value="all">Display All</option>
        <option value="Over 500">Display High Calorie (500+) Foods</option>
      </select>
    </div>
  </div>
  <food-display *ngFor="#currentFood of foodList | calories:filterChoice" [food]='currentFood' (click)='foodClicked(currentFood)'></food-display>
  <edit-food-display *ngIf="clickedFood" [clickedFood]='clickedFood'></edit-food-display>
  <total-calorie-display *ngFor="#currentFood of foodList"></total-calorie-display>
  `
})

export class FoodListDisplayComponent{
  public foodList = [];
  public filterChoice: string;
  public clickedFood: Food;
  public food: Food;
  public totalCalories: number = 0;
  constructor(){}
  onChange(option: string){
    this.filterChoice = option;
  }
  foodClicked(food: Food){
    this.clickedFood = food;
  }
  addCalories(food: Food){
    this.totalCalories += food.calories;
    console.log(this.totalCalories);
  }
}
