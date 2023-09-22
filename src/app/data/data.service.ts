import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Product } from '../models/product.model';

import { recipes } from './recipes.data';

import * as _ from 'lodash';
import { Products } from './products.data';

@Injectable({ providedIn: 'root' })
export class DataService {
  public productsList: ProductsListItem[] = [];
  public recipesList: RecipesListItem[] = [];

  private readonly recipesCountsStorageKey = 'recipesCounts';
  private readonly checkedProductsStorageKey = 'checkedProducts';

  private recipesCounts: number[] = [];
  private productsTotalAmount: Map<string, number> = new Map();
  private checkedProducts: Set<string> = new Set();

  constructor() {
    this.loadRecipesCountsFromLocalStorage();
    this.loadCheckedProductsFromLocalStorage();
    this.update();
  }

  public setCount(recipeId: number, count: number): void {
    this.recipesCounts[recipeId] = count;
    this.recipesList[recipeId].recipe.ingredients.forEach((i) => {
      this.checkedProducts.delete(i.product.name);
    });
    this.update();
  }

  public addRecipeToList(recipeId: number): void {
    this.setCount(recipeId, this.recipesCounts[recipeId] + 1);
  }

  public removeRecipeFromList(recipeId: number): void {
    if (this.recipesCounts[recipeId] > 0) {
      this.setCount(recipeId, this.recipesCounts[recipeId] - 1);
    }
  }

  public checkProduct(product: Product): void {
    if (this.checkedProducts.has(product.name)) {
      return;
    }
    this.checkedProducts.add(product.name);
    this.update();
  }

  public uncheckProduct(product: Product): void {
    if (!this.checkedProducts.has(product.name)) {
      return;
    }
    this.checkedProducts.delete(product.name);
    this.update();
  }

  private update(): void {
    this.productsTotalAmount.clear();
    recipes.forEach((recipe) => {
      if (!this.recipesCounts[recipe.index]) {
        return;
      }
      recipe.ingredients.forEach((ingredient) => {
        let currentAmount =
          this.productsTotalAmount.get(ingredient.product.name) ?? 0;
        this.productsTotalAmount.set(
          ingredient.product.name,
          currentAmount + ingredient.amount * this.recipesCounts[recipe.index]
        );
      });
    });

    this.productsList = [];
    this.productsTotalAmount.forEach((totalAmount, productName) => {
      this.productsList.push({
        product: Products.getByName(productName),
        amount: totalAmount,
        checked: this.checkedProducts.has(productName),
      } as ProductsListItem);
    });

    this.recipesList = _.zip(recipes, this.recipesCounts).map(
      (rc: any) => ({ recipe: rc[0], count: rc[1] } as RecipesListItem)
    );

    localStorage.setItem(
      this.recipesCountsStorageKey,
      JSON.stringify(this.recipesCounts)
    );
    localStorage.setItem(
      this.checkedProductsStorageKey,
      JSON.stringify(Array.from(this.checkedProducts.values()))
    );
  }

  private loadRecipesCountsFromLocalStorage(): void {
    const jsonStr = localStorage.getItem(this.recipesCountsStorageKey);
    if (jsonStr) {
      // it's ok to have a shorter array then the list of recipes
      this.recipesCounts = JSON.parse(jsonStr) as number[];
    }
  }
  private loadCheckedProductsFromLocalStorage(): void {
    const jsonStr = localStorage.getItem(this.checkedProductsStorageKey);
    if (jsonStr) {
      const checkedProducts = JSON.parse(jsonStr) as string[];
      checkedProducts.forEach((i) => this.checkedProducts.add(i));
    }
  }
}

export class ProductsListItem {
  public readonly product: Product;
  public readonly amount: number;
  public readonly checked: boolean;
}

export class RecipesListItem {
  public readonly recipe: Recipe;
  public readonly count: number;
}
