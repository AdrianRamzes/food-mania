import { Component } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  currentView = View.recipies;

  get recipiesSum(): number {
    return _.sumBy(this.dataService.recipiesList, 'count');
  }

  constructor(private dataService: DataService) { }

  onCartClick(): void {
    this.currentView = View.shoppingList;
  }

  onMealClick(): void {
    this.currentView = View.recipies;
  }
}

enum View {
  recipies = 'recipies',
  shoppingList = 'shopping-list',
}
