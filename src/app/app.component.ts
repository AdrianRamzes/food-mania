import { Component } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentView = View.RECIPES;

  get recipesSum(): number {
    return _.sumBy(this.dataService.recipesList, 'count');
  }

  constructor(private dataService: DataService) {}

  onCartClick(): void {
    this.currentView = View.SHOPPING_LIST;
  }

  onMealClick(): void {
    this.currentView = View.RECIPES;
  }
}

enum View {
  RECIPES = 'recipes',
  SHOPPING_LIST = 'shopping-list',
}
