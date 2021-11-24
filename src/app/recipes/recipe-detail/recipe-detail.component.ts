import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent{

  @Input() recipe!: Recipe;

  constructor(private shoppingListService: ShoppingListService){

  }


  addIngredients(ingredients: Ingredient[]){
    this.shoppingListService.onAddIngredients(ingredients);
    console.log(this.shoppingListService.getIngredients());
  }

}
