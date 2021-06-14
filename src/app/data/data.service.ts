import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Product } from '../models/product.model';

import { recipes } from './recipies.data';
import { products } from './products.data';

import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class DataService {

    public shoppingList: [Product, number][] = [];

    private readonly storageKey = 'recipiesCounts';

    private _recipiesById = new Map<number, Recipe>();
    private _productsById = new Map<number, Product>();

    private _counts: number[] = [];

    constructor() {
        const jsonStr = localStorage.getItem(this.storageKey);
        if (jsonStr) {
            this._counts = JSON.parse(jsonStr);
        } else {
            recipes.forEach(r => {
                this._counts.push(0);
            });
        }
        recipes.forEach(r => {
            this._recipiesById.set(r.index, r);
        });
        products.forEach(p => {
            this._productsById.set(p.index, p);
        });
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
        return recipes;
    }

    public getSelectedRecipies(): Recipe[] {
        return this.getAllRecipies().filter((r, i) => this._counts[i] > 0);
    }

    public getRecipe(id: number): Recipe {
        return this._recipiesById.get(id) ?? null;
    }

    public getProduct(id: number): Product {
        return this._productsById.get(id) ?? null;
    }

    public getProductsForRecipe(recipeId: number): Product[] {
        return this.getRecipe(recipeId).ingredients
            .map(i => this.getProduct(i[0]));
    }

    private update(): void {
        const productsMap = new Map<number, number>();
        this._counts.forEach((count, id) => {
            this.getRecipe(id).ingredients.forEach(ingredient => {
                const prodId = ingredient[0];
                const amount = ingredient[1] * count;
                const currentAmount = productsMap.get(prodId) ?? 0;
                productsMap.set(prodId, currentAmount + amount);
            });
        });
        this.shoppingList = Array.from(productsMap.entries()).map(x => [this.getProduct(x[0]), x[1]]);
        localStorage.setItem(this.storageKey, JSON.stringify(this._counts));
    }
}
