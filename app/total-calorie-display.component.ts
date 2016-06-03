import {Food} from './food.model';
import {Component} from 'angular2/core';

@Component({
  selector: 'total-calorie-display',
  inputs: ['food'],
  template:`
    <h3>Total Calories {{totalCalories}}</h3>
  `
})

export class TotalCalorieDisplayComponent{
  public totalCalories : number = 0;
  public food: Food;
  constructor(){
  }
}
