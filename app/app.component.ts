import {Component} from 'angular2/core';
import {Food} from './food.model';
import {AddFoodComponent} from './add-food.component';

@Component({
  selector: 'my-app',
  directives: [AddFoodComponent],
  template:`
    <div class="container">
      <h1>YOUR FOOD BRO</h1>
      <add-food (onSubmit)='addToFoodList($event)'></add-food>
    </div>
  `
})

export class AppComponent{
  public foodList = [];
  constructor(){}
  addToFoodList(food: Food){
    this.foodList.push(food);
    console.log(this.foodList);
  }
}
