import {Food} from './food.model';
import {Component} from 'angular2/core';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template:`
    <div class="row">
      <h4 class="col-sm-2">{{food.name}}</h4>
      <h4 class="col-sm-4">{{food.details}}</h4>
      <h4 class="col-sm-2">{{food.calories}}</h4>
    </div>
  `
})

export class FoodDisplayComponent{
  public food: Food;
  constructor(){}
}
