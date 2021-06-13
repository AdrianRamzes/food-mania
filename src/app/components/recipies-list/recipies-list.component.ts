import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.scss']
})
export class RecipiesListComponent implements OnInit {

  @Input()
  recipies: Recipe[];

  @Output()
  selectedRecipiesChanged = new EventEmitter<Map<Recipe, number>>();

  private selectedRecipies = new Map<Recipe, number>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeAmountChanged(event: [Recipe, number]) {
    this.selectedRecipies.set(event[0], event[1]);
    if (event[1] <= 0) {
      this.selectedRecipies.delete(event[0]);
    }
    this.selectedRecipiesChanged.emit(this.selectedRecipies);
  }
}
