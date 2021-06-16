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

    private readonly storageKey = 'recipiesCounts';

    private recipiesCounts: number[] = [];
    private productsCounts: number[] = [];

    constructor() {
        const jsonStr = localStorage.getItem(this.storageKey);
        if (jsonStr) {
            const loaded = JSON.parse(jsonStr) as number[];
            if (loaded.length === recipies.length) {
                this.recipiesCounts = loaded;
            }
        }
        if (this.recipiesCounts.length === 0) {
            recipies.forEach(r => {
                this.recipiesCounts.push(0);
            });
        }
        this.update();
    }

    public getCount(recipeId: number): number {
        return this.recipiesCounts[recipeId];
    }

    public getTotalCount(): number {
        return _.sum(this.recipiesCounts);
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

    public getAllRecipies(): Recipe[] {
        return recipies;
    }

    private update(): void {
        const productsMap = new Map<number, number>();
        this.recipiesCounts.forEach((count, index) => {
            recipies[index].ingredients.forEach(ingredient => {
                const prodId = ingredient[0];
                const amount = ingredient[1] * count;
                const currentAmount = productsMap.get(prodId) ?? 0;
                productsMap.set(prodId, currentAmount + amount);
            });
        });
        this.productsList = Array.from(productsMap.entries()).map(x => ({ product: products[x[0]], amount: x[1] } as ProductsListItem));
        localStorage.setItem(this.storageKey, JSON.stringify(this.recipiesCounts));
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
