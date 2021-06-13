import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input()
  recipies: Recipe[];

  @Input()
  recipiesAmounts: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
