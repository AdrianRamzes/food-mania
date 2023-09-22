import { Component } from '@angular/core';
import { DataService, RecipesListItem } from '../data/data.service';
import { Recipe } from '../models/recipe.model';

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

  onCountChanged(recipe: Recipe, count: number): void {
    this.dataService.setCount(recipe, count);
  }
}
