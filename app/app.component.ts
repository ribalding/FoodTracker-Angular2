import {Component} from 'angular2/core';
import {Food} from './food.model';
import {AddFoodComponent} from './add-food.component';
import {FoodListDisplayComponent} from './food-list-display.component';

@Component({
  selector: 'my-app',
  directives: [AddFoodComponent, FoodListDisplayComponent],
  template:`
    <div class="container">
      <div class="top">
        <h1>'FOO'D</h1>
        <add-food (onSubmit)='addToFoodList($event)'></add-food>
      </div>
      <div class="bottom">
        <food-list-display [foodList]="foodList"></food-list-display>
      </div>
    </div>
  `
})

export class AppComponent{
  public foodList = [];
  constructor(){}
  addToFoodList(food: Food){
    this.foodList.push(food);
  }
}
