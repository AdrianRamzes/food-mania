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

  @Input()
  recipiesAmounts: number[];

  @Output()
  recipiesAmountsChanged = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeAmountChanged(event: [Recipe, number]) {
    this.recipiesAmounts[event[0].id] = Math.max(event[1], 0);
    this.recipiesAmountsChanged.emit(this.recipiesAmounts);
  }
}
