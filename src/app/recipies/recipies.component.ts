import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent {

  get recipies(): Recipe[] {
    return this.dataService.getAllRecipies();
  }

  getRecipeCount(recipeId: number): number {
    return this.dataService.getCount(recipeId);
  }

  constructor(private dataService: DataService) { }

  onCountChanged(recipeId: number, count: number): void {
    this.dataService.setCount(recipeId, count);
  }
}
