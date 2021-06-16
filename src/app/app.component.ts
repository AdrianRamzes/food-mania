import { Component } from '@angular/core';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  currentView = View.recipies;

  get recipiesSum(): number {
    return this.dataService.getTotalCount();
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