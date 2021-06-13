import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { recipes } from 'src/app/data/recipies.data';
import { products } from 'src/app/data/products.data';
import { Product } from 'src/app/models/product.model';
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

  _products: [Product, number][] = [];
  get productsList() {
    return this._products;
  }

  _allProducts = new Map<number, Product>()
  constructor() {
    products.forEach(p => {
      this._allProducts.set(p.id, p);
    });
  }

  ngOnInit(): void {
    this.updateProducts();
  }

  onAddRecipeClick(recipeId: number) {
    this.addRecipe.emit(recipeId);
    this.updateProducts();
  }

  onRemoveRecipeClick(recipeId: number) {
    this.removeRecipe.emit(recipeId);
    this.updateProducts();
  }

  private updateProducts() {
    const tmpProducts = new Map<Product, number>();
    this.selectedRecipies.forEach((recipe) => {
      const count = this.recipiesAmounts[recipe.id];
      recipe.products.forEach(entry => {
        const prod = this._allProducts.get(entry[0]);
        const amount = entry[1] * count;
        const currentAmount = tmpProducts.has(prod)
          ? tmpProducts.get(prod)
          : 0;
        tmpProducts.set(prod, currentAmount + amount);
      });
    });
    this._products = Array.from(tmpProducts.entries());
  }
}
