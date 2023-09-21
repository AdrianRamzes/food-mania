import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Product } from '../models/product.model';

import { recipes } from './recipes.data';
import { products } from './products.data';

import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class DataService {
  public productsList: ProductsListItem[] = [];
  public recipesList: RecipesListItem[] = [];

  private readonly recipesCountsStorageKey = 'recipesCounts';
  private readonly checkedProductsStorageKey = 'checkedProducts';

  private recipesCounts: number[] = [];
  private productsCounts: number[] = [];
  private checkedProducts: Set<number> = new Set();

  constructor() {
    this.loadRecipesCountsFromLocalStorage();
    this.loadCheckedProductsFromLocalStorage();
    this.update();
  }

  public setCount(recipeId: number, count: number): void {
    this.recipesCounts[recipeId] = count;
    this.recipesList[recipeId].recipe.ingredients.forEach((i) => {
      this.checkedProducts.delete(i.productId);
    });
    this.update();
  }

  public addRecipeToList(recipeId: number): void {
    this.recipesCounts[recipeId]++;
    this.recipesList[recipeId].recipe.ingredients.forEach((i) => {
      this.checkedProducts.delete(i.productId);
    });
    this.update();
  }

  public removeRecipeFromList(recipeId: number): void {
    if (this.recipesCounts[recipeId] > 0) {
      this.recipesCounts[recipeId]--;
      this.recipesList[recipeId].recipe.ingredients.forEach((i) => {
        this.checkedProducts.delete(i.productId);
      });
      this.update();
    }
  }

  public checkProduct(productId: number): void {
    if (this.productsList[productId].checked) {
      return;
    }
    this.checkedProducts.add(productId);
    this.productsList[productId] = {
      product: this.productsList[productId].product,
      amount: this.productsList[productId].amount,
      checked: true,
    };
    localStorage.setItem(
      this.checkedProductsStorageKey,
      JSON.stringify(Array.from(this.checkedProducts.values()))
    );
  }

  public uncheckProduct(productId: number): void {
    if (!this.productsList[productId].checked) {
      return;
    }
    this.checkedProducts.delete(productId);
    this.productsList[productId] = {
      product: this.productsList[productId].product,
      amount: this.productsList[productId].amount,
      checked: false,
    };
    localStorage.setItem(
      this.checkedProductsStorageKey,
      JSON.stringify(Array.from(this.checkedProducts.values()))
    );
  }

  private update(): void {
    this.productsCounts = [];
    products.forEach((p) => {
      this.productsCounts.push(0);
    });
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        this.productsCounts[ingredient.productId] +=
          ingredient.amount * this.recipesCounts[recipe.index];
      });
    });
    this.productsList = _.zip(products, this.productsCounts).map(
      (pc: any) =>
        ({
          product: pc[0],
          amount: pc[1],
          checked: this.checkedProducts.has(pc[0].index),
        } as ProductsListItem)
    );
    this.recipesList = _.zip(recipes, this.recipesCounts).map(
      (rc: any) => ({ recipe: rc[0], count: rc[1] } as RecipesListItem)
    );

    this.productsList
      .filter((p) => p.checked && p.amount === 0)
      .forEach((p) => {
        this.checkedProducts.delete(p.product.index);
      });

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
      const checkedIndexes = JSON.parse(jsonStr) as number[];
      checkedIndexes.forEach((i) => this.checkedProducts.add(i));
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
