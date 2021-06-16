import { Component } from '@angular/core';
import { DataService, ProductsListItem, RecipiesListItem } from '../data/data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  get selectedRecipies(): RecipiesListItem[] {
    return this.dataService.recipiesList.filter((r) => r.count > 0);
  }

  get productsList(): ProductsListItem[] {
    return this.dataService.productsList.filter(p => p.amount > 0);
  }

  constructor(private dataService: DataService) { }

  onAddRecipeClick(recipeId: number): void {
    this.dataService.addRecipeToList(recipeId);
  }

  onRemoveRecipeClick(recipeId: number): void {
    this.dataService.removeRecipeFromList(recipeId);
  }

  onProductChecked(p: ProductsListItem, event): void {
    if (event.checked) {
      this.dataService.checkProduct(p.product.index);
    } else {
      this.dataService.uncheckProduct(p.product.index);
    }
  }
}
