import { Component } from '@angular/core';
import { DataService, RecipesListItem } from '../data/data.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  get recipesList(): RecipesListItem[] {
    return this.dataService.recipesList;
  }

  constructor(private dataService: DataService) {}

  onCountChanged(recipeId: number, count: number): void {
    this.dataService.setCount(recipeId, count);
  }
}
