import {Pipe, PipeTransform} from "angular2/core";
import {Food} from './food.model';

@Pipe({
  name: 'calories',
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], args){
    var desiredCalorieState = args[0];
    if (desiredCalorieState === "Over 500"){
      return input.filter((food) => {
        return food.calories >= 500;
      });
    } else {
      return input;
    }
  }
}
