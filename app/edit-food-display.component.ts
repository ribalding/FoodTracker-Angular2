import {Food} from './food.model';
import {Component} from 'angular2/core';

@Component({
  selector: 'edit-food-display',
  inputs: ['clickedFood'],
  template: `
    <input type="text" [(ngModel)]="clickedFood.name" class="input-md" placeholder="Edit Name">
    <input type="text" [(ngModel)]="clickedFood.details" class="input-md" placeholder="Edit Details">
    <input type="text" [(ngModel)]="clickedFood.calories" class="input-md" placeholder="Edit Calories">
  `
})

export class EditFoodDisplayComponent{
  constructor(){}
}
