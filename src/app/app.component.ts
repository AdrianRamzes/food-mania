import { Component } from '@angular/core';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  currentView = View.recipies;

  get recipiesSum() {
    return this.dataService.getTotalCount();
  }

  constructor(private dataService: DataService) { }

  onCartClick() {
    this.currentView = View.shoppingList;
  }

  onMealClick() {
    this.currentView = View.recipies;
  }
}

enum View {
  recipies = 'recipies',
  shoppingList = 'shopping-list',
}