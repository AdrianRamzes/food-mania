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

    private recipiesCounts: number[] = [];
    private productsCounts: number[] = [];

    constructor() {
        this.loadRecipiesCountsFromLocalStorage();
        this.update();
    }

    public setCount(recipeId: number, count: number): void {
        this.recipiesCounts[recipeId] = count;
        this.update();
    }

    public addRecipeToList(recipeId: number): void {
        this.recipiesCounts[recipeId]++;
        this.update();
    }

    public removeRecipeFromList(recipeId: number): void {
        if (this.recipiesCounts[recipeId] > 0) {
            this.recipiesCounts[recipeId]--;
            this.update();
        }
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
            .map(pc => ({ product: pc[0], amount: pc[1] } as ProductsListItem));
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
}

export class ProductsListItem {
    public readonly product: Product;
    public readonly amount: number;
}

export class RecipiesListItem {
    public readonly recipe: Recipe;
    public readonly count: number;
}
