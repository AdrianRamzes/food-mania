import { Component } from '@angular/core';
import {
  DataService,
  ProductsListItem,
  RecipesListItem,
} from '../data/data.service';

@Component({
  selector: 'shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent {
  get selectedRecipes(): RecipesListItem[] {
    return this.dataService.recipesList.filter((r) => r.count > 0);
  }

  get productsList(): ProductsListItem[] {
    return this.dataService.productsList.filter((p) => p.amount > 0);
  }

  constructor(private dataService: DataService) {}

  onAddRecipeClick(recipeId: number): void {
    this.dataService.addRecipeToList(recipeId);
  }

  onRemoveRecipeClick(recipeId: number): void {
    this.dataService.removeRecipeFromList(recipeId);
  }

  onProductChecked(p: ProductsListItem, event: any): void {
    if (event.checked) {
      this.dataService.checkProduct(p.product.index);
    } else {
      this.dataService.uncheckProduct(p.product.index);
    }
  }
}
