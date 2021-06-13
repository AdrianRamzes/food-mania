import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent implements OnInit {

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
