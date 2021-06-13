import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {

  @Input()
  recipe: Recipe;

  private _amount: number = 0;
  @Input()
  set amount(value: number) {
    this._amount = value ?? 0;
  };

  get amount() {
    return this._amount;
  }

  @Output()
  amountChange = new EventEmitter<[Recipe, number]>();

  ngOnInit(): void {
  }

  onMinusClick(): void {
    this.amount = Math.max(this.amount - 1, 0);
    this.amountChange.emit([this.recipe, this.amount]);
  }

  onPlusClick(): void {
    this.amount++;
    this.amountChange.emit([this.recipe, this.amount]);
  }
}
