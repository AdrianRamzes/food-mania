import { Component } from '@angular/core';
import { DataService, RecipiesListItem } from '../data/data.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent {

  get recipiesList(): RecipiesListItem[] {
    return this.dataService.recipiesList;
  }

  constructor(private dataService: DataService) { }

  onCountChanged(recipeId: number, count: number): void {
    this.dataService.setCount(recipeId, count);
  }
}
