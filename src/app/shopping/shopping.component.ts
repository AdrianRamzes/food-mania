import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { DataService } from '../data/data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  get selectedRecipies(): Recipe[] {
    return this.dataService.getSelectedRecipies();
  }

  get productsList(): [Product, number][] {
    return this.dataService.shoppingList;
  }

  getRecipeCount(recipeId: number) {
    return this.dataService.getCount(recipeId);
  }

  constructor(private dataService: DataService) { }

  onAddRecipeClick(recipeId: number) {
    this.dataService.addRecipeToList(recipeId);
  }

  onRemoveRecipeClick(recipeId: number) {
    this.dataService.removeRecipeFromList(recipeId);
  }
}
