import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { DataService, ProductsListItem } from '../data/data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  get selectedRecipies(): Recipe[] {
    return this.dataService.getAllRecipies().filter((r) => this.dataService.getCount(r.index) > 0);
  }

  get productsList(): ProductsListItem[] {
    return this.dataService.productsList.filter(p => p.amount > 0);
  }

  getRecipeCount(recipeId: number): number {
    return this.dataService.getCount(recipeId);
  }

  constructor(private dataService: DataService) { }

  onAddRecipeClick(recipeId: number): void {
    this.dataService.addRecipeToList(recipeId);
  }

  onRemoveRecipeClick(recipeId: number): void {
    this.dataService.removeRecipeFromList(recipeId);
  }
}
