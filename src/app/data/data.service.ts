import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Product } from '../models/product.model';

import { recipies } from './recipies.data';
import { products } from './products.data';

import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class DataService {

    public shoppingList: [Product, number][] = [];

    private readonly storageKey = 'recipiesCounts';

    private _counts: number[] = [];

    constructor() {
        const jsonStr = localStorage.getItem(this.storageKey);
        if (jsonStr) {
            const loaded = JSON.parse(jsonStr) as number[];
            if (loaded.length === recipies.length) {
                this._counts = loaded;
            }
        }
        if (this._counts.length === 0) {
            recipies.forEach(r => {
                this._counts.push(0);
            });
        }
        this.update();
    }

    public getCount(recipeId: number): number {
        return this._counts[recipeId];
    }

    public getTotalCount(): number {
        return _.sum(this._counts);
    }

    public setCount(recipeId: number, count: number): void {
        this._counts[recipeId] = count;
        this.update();
    }

    public addRecipeToList(recipeId: number): void {
        this._counts[recipeId]++;
        this.update();
    }

    public removeRecipeFromList(recipeId: number): void {
        if (this._counts[recipeId] > 0) {
            this._counts[recipeId]--;
            this.update();
        }
    }

    public getAllRecipies(): Recipe[] {
        return recipies;
    }

    private update(): void {
        const productsMap = new Map<number, number>();
        this._counts.forEach((count, index) => {
            recipies[index].ingredients.forEach(ingredient => {
                const prodId = ingredient[0];
                const amount = ingredient[1] * count;
                const currentAmount = productsMap.get(prodId) ?? 0;
                productsMap.set(prodId, currentAmount + amount);
            });
        });
        this.shoppingList = Array.from(productsMap.entries()).map(x => [products[x[0]], x[1]]);
        localStorage.setItem(this.storageKey, JSON.stringify(this._counts));
    }
}
