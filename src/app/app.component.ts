import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

import { recipes } from "src/app/data/recipies.data";
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public get recipes(): Recipe[] {
    return recipes;
  };

  recipiesSum = 0;
  recipiesAmounts: number[] = [];

  private readonly storageKey = 'recipiesAmounts';

  showRecipies = true;
  showShoppingList = false;

  ngOnInit() {
    const jsonStr = localStorage.getItem(this.storageKey);
    if (jsonStr) {
      this.recipiesAmounts = JSON.parse(jsonStr);
    } else {
      recipes.forEach(r => {
        this.recipiesAmounts.push(0);
      });
    }
    this.recipiesSum = _.sum(this.recipiesAmounts);
  }

  onCartClick() {
    this.showRecipies = !this.showRecipies;
    this.showShoppingList = !this.showShoppingList;
  }

  onRecipiesAmountsChanged(event: number[]) {
    this.recipiesSum = _.sum(event);
    localStorage.setItem(this.storageKey, JSON.stringify(event));
  }
}
