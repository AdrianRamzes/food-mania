import { Recipe } from '../models/recipe.model';
import { Product } from '../models/product.model';

import { Recipes } from './recipes.data';
import { Products } from './products.data';

import { writable } from 'svelte/store';

export class DataService {
  
  public productsList = writable([] as ProductsListItem[]);
  public recipesList = writable([] as RecipesListItem[]);

  private readonly recipesCountsStorageKey = 'recipesCounts';
  private readonly checkedProductsStorageKey = 'checkedProducts';
  private readonly currentViewStorageKey = 'currentView';
  private readonly version = '0.2';
  private readonly versionStorageKey = 'version';

  private recipesCounts: Map<string, number> = new Map();
  private productsTotalAmount: Map<string, number> = new Map();
  private checkedProducts: Set<string> = new Set();
  private currentView: number = 0;

  constructor() {
    this.checkLocalStorage();
    this.loadRecipesCountsFromLocalStorage();
    this.loadCheckedProductsFromLocalStorage();
    this.loadCurrentViewFromLocalStorage();
    this.update();
  }

  public setCount(recipe: Recipe, count: number): void {
    this.recipesCounts.set(recipe.title, count);
    if (count <= 0) {
      this.recipesCounts.delete(recipe.title);
    }
    recipe.ingredients.forEach((i) => {
      this.checkedProducts.delete(i.product.name);
    });
    this.update();
  }

  public addRecipeToList(recipe: Recipe): void {
    const count = this.recipesCounts.has(recipe.title)
      ? this.recipesCounts.get(recipe.title)!
      : 0;
    this.setCount(recipe, count + 1);
  }

  public removeRecipeFromList(recipe: Recipe): void {
    if (!this.recipesCounts.has(recipe.title)) {
      return;
    }
    const count = this.recipesCounts.get(recipe.title)!;
    if (count > 0) {
      this.setCount(recipe, count - 1);
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

  public getCurrentView(): number {
    return this.currentView;
  }

  public setCurrentView(value: number) {
    localStorage.setItem(this.currentViewStorageKey, value.toString());
  }

  private update(): void {
    this.productsTotalAmount.clear();
    Recipes.all.forEach((recipe) => {
      const count = this.recipesCounts.has(recipe.title)
        ? this.recipesCounts.get(recipe.title)!
        : 0;
      if (count <= 0) return;
      recipe.ingredients.forEach((ingredient) => {
        let currentAmount =
          this.productsTotalAmount.get(ingredient.product.name) ?? 0;
        this.productsTotalAmount.set(
          ingredient.product.name,
          currentAmount + ingredient.amount * count
        );
      });
    });

    this.recipesList.set([]);
    Recipes.all.forEach((recipe) => {
      const count = this.recipesCounts.has(recipe.title)
        ? this.recipesCounts.get(recipe.title)
        : 0;
      this.recipesList.update((items) => {items.push({
        recipe: recipe,
        count: count,
      } as RecipesListItem); return items});
    });

    this.productsList.set([]);
    this.productsTotalAmount.forEach((totalAmount, productName) => {
      this.productsList.update((items) => {
        items.push({
          product: Products.getByName(productName),
          amount: totalAmount,
          checked: this.checkedProducts.has(productName),
        } as ProductsListItem)
        return items;
      });
    });

    localStorage.setItem(
      this.recipesCountsStorageKey,
      JSON.stringify(Array.from(this.recipesCounts.entries()))
    );
    localStorage.setItem(
      this.checkedProductsStorageKey,
      JSON.stringify(Array.from(this.checkedProducts.values()))
    );
  }

  private loadRecipesCountsFromLocalStorage(): void {
    const jsonStr = localStorage.getItem(this.recipesCountsStorageKey);
    if (jsonStr) {
      this.recipesCounts = new Map<string, number>(JSON.parse(jsonStr));
    }
  }
  private loadCheckedProductsFromLocalStorage(): void {
    const jsonStr = localStorage.getItem(this.checkedProductsStorageKey);
    if (jsonStr) {
      const checkedProducts = JSON.parse(jsonStr) as string[];
      checkedProducts.forEach((i) => this.checkedProducts.add(i));
    }
  }
  private loadCurrentViewFromLocalStorage() {
    this.currentView = parseInt(localStorage.getItem(this.currentViewStorageKey) ?? "0");
  }
  private checkLocalStorage(): void {
    if (localStorage.getItem(this.versionStorageKey) != this.version) {
      localStorage.clear();
      localStorage.setItem(this.versionStorageKey, this.version);
    }
  }
}

export class ProductsListItem {
  public readonly product: Product;
  public readonly amount: number;
  public readonly checked: boolean;

  constructor(product: Product, amount: number, checked: boolean) {
    this.product = product;
    this.amount = amount;
    this.checked = checked;
  }
}

export class RecipesListItem {
  public readonly recipe: Recipe;
  public readonly count: number;

  constructor(recipe: Recipe, count: number) {
    this.recipe = recipe;
    this.count = count;
  }
}
