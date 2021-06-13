import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  recipiesSum = 0;

  recipes = [
    {
      id: 1,
      title: 'title #1',
      description: 'description',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    } as Recipe,
    {
      id: 2,
      title: 'title #2',
      description: 'description',
      imageUrl: 'https://images.unsplash.com/photo-1605190557072-1fe6a230ee65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib'
    } as Recipe,
    {
      id: 3,
      title: 'title #3',
      description: 'description',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    } as Recipe,
    {
      id: 4,
      title: 'title #4',
      description: 'description',
      imageUrl: 'https://images.unsplash.com/photo-1605190557072-1fe6a230ee65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib'
    } as Recipe,
  ];

  ngOnInit() {
  }

  onCartClick() {

  }

  onSelectedRecipiesChanged(event: Map<number, number>) {
    this.recipiesSum = _.sum(Array.from(event.values()));
  }
}
