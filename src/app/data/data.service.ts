import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Product } from '../models/product.model';

import { recipies } from './recipies.data';
import { products } from './products.data';

import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class DataService {

    public productsList: ProductsListItem[] = [];
    public recipiesList: RecipiesListItem[] = [];

    private readonly recipiesCountsStorageKey = 'recipiesCounts';
    private readonly checkedProductsStorageKey = 'checkedProducts';

    private recipiesCounts: number[] = [];
    private productsCounts: number[] = [];
    private checkedProducts: Set<number> = new Set();

    constructor() {
        this.loadRecipiesCountsFromLocalStorage();
        this.loadCheckedProductsFromLocalStorage();
        this.update();
    }

    public setCount(recipeId: number, count: number): void {
        this.recipiesCounts[recipeId] = count;
        this.recipiesList[recipeId].recipe.ingredients.forEach(i => {
            this.checkedProducts.delete(i.productId);
        });
        this.update();
    }

    public addRecipeToList(recipeId: number): void {
        this.recipiesCounts[recipeId]++;
        this.recipiesList[recipeId].recipe.ingredients.forEach(i => {
            this.checkedProducts.delete(i.productId);
        });
        this.update();
    }

    public removeRecipeFromList(recipeId: number): void {
        if (this.recipiesCounts[recipeId] > 0) {
            this.recipiesCounts[recipeId]--;
            this.recipiesList[recipeId].recipe.ingredients.forEach(i => {
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
        localStorage.setItem(this.checkedProductsStorageKey, JSON.stringify(Array.from(this.checkedProducts.values())));
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
        localStorage.setItem(this.checkedProductsStorageKey, JSON.stringify(Array.from(this.checkedProducts.values())));
    }

    private update(): void {
        this.productsCounts = [];
        products.forEach(p => {
            this.productsCounts.push(0);
        });
        recipies.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                this.productsCounts[ingredient.productId]
                    += ingredient.amount * this.recipiesCounts[recipe.index];
            });
        });
        this.productsList = _.zip(products, this.productsCounts)
            .map(pc => ({ product: pc[0], amount: pc[1], checked: this.checkedProducts.has(pc[0].index) } as ProductsListItem));
        this.recipiesList = _.zip(recipies, this.recipiesCounts)
            .map(rc => ({ recipe: rc[0], count: rc[1] } as RecipiesListItem));

        localStorage.setItem(this.recipiesCountsStorageKey, JSON.stringify(this.recipiesCounts));
    }

    private loadRecipiesCountsFromLocalStorage(): void {
        const jsonStr = localStorage.getItem(this.recipiesCountsStorageKey);
        if (jsonStr) {
            // it's ok to have a shorter array then the list of recipies
            this.recipiesCounts = JSON.parse(jsonStr) as number[];
        }
    }
    private loadCheckedProductsFromLocalStorage(): void {
        const jsonStr = localStorage.getItem(this.checkedProductsStorageKey);
        if (jsonStr) {
            const checkedIndexes = JSON.parse(jsonStr) as number[];
            checkedIndexes.forEach(i => this.checkedProducts.add(i));
        }
    }
}

export class ProductsListItem {
    public readonly product: Product;
    public readonly amount: number;
    public readonly checked: boolean;
}

export class RecipiesListItem {
    public readonly recipe: Recipe;
    public readonly count: number;
}
