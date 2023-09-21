import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input()
  recipe: Recipe;

  private _count: number = 0;
  @Input()
  set count(value: number) {
    this._count = value ?? 0;
  }

  get count(): number {
    return this._count;
  }

  @Output()
  countChange = new EventEmitter<number>();

  ngOnInit(): void {}

  onMinusClick(): void {
    this.count = Math.max(this.count - 1, 0);
    this.countChange.emit(this.count);
  }

  onPlusClick(): void {
    this.count++;
    this.countChange.emit(this.count);
  }
}
