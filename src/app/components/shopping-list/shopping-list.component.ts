import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { recipes } from 'src/app/data/recipies.data';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input()
  recipies: Recipe[];

  @Input()
  recipiesAmounts: number[];

  @Output()
  addRecipe = new EventEmitter<number>();

  @Output()
  removeRecipe = new EventEmitter<number>();

  get selectedRecipies(): Recipe[] {
    return recipes.filter((r) => this.recipiesAmounts[r.id] > 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAddRecipeClick(recipeId: number) {
    this.addRecipe.emit(recipeId);
  }

  onRemoveRecipeClick(recipeId: number) {
    this.removeRecipe.emit(recipeId);
  }
}
