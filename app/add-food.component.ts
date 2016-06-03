import {Food} from './food.model';
import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'add-food',
  outputs: ['onSubmit'],
  template: `
    <h3>Add A New Food:</h3>
    <input type="text" placeholder="Name" class="input-lg" #inputName>
    <input type="text" placeholder="Details" class="input-lg" #inputDetails>
    <input type="text" placeholder="Calories" class="input-lg" #inputCalories>
    <button (click)='addFood(inputName, inputDetails, inputCalories)'>Submit</button>
  `
})

export class AddFoodComponent{
  public onSubmit: EventEmitter<Food>;
  constructor(){
    this.onSubmit = new EventEmitter();
  }
  addFood(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement): void{
    var newFood = new Food(name.value, details.value, parseInt(calories.value));
    this.onSubmit.emit(newFood);
  }
}
