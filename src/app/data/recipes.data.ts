import { Ingredient, Recipe } from '../models/recipe.model';
import { Products } from '../data/products.data';

export class Recipes {
  public static readonly all = [
    new Recipe(
      'Simple Brownie',
      'description',
      'assets/images/main_img_0.jpeg',
      [
        new Ingredient(Products.getByName('Dark Chocolate'), 250),
        new Ingredient(Products.getByName('Butter'), 200),
        new Ingredient(Products.getByName('Eggs'), 3),
        new Ingredient(Products.getByName('Sugar'), 250),
        new Ingredient(Products.getByName('Flour'), 135),
        new Ingredient(Products.getByName('Salt'), 1),
      ]
    ),
    new Recipe(
      'Baked Salmon With Vegetables',
      'description',
      'assets/images/main_img_1.jpeg',
      [
        new Ingredient(Products.getByName('Frozen Salmon'), 250),
        new Ingredient(Products.getByName('Frozen Vegetables'), 700),
      ]
    ),
    new Recipe(
      'Simple Burrito',
      'description',
      'assets/images/main_img_2.jpeg',
      [
        new Ingredient(Products.getByName('Salt'), 1),
        new Ingredient(Products.getByName('Tortillas'), 4),
        new Ingredient(Products.getByName('Sweet Corn (canned)'), 350),
        new Ingredient(Products.getByName('Ground Beef'), 500),
        new Ingredient(Products.getByName('Avocado'), 1),
        new Ingredient(Products.getByName('Onion'), 1),
        new Ingredient(Products.getByName('Tomato'), 2),
        new Ingredient(Products.getByName('Pepper'), 100),
        new Ingredient(Products.getByName('Red Bean (canned)'), 200),
        new Ingredient(Products.getByName('Rice'), 100),
      ]
    ),
    new Recipe(
      'American Pancakes',
      'description',
      'assets/images/main_img_3.jpeg',
      [
        new Ingredient(Products.getByName('Eggs'), 1),
        new Ingredient(Products.getByName('Flour'), 300),
        new Ingredient(Products.getByName('Butter'), 300),
        new Ingredient(Products.getByName('Powdered Sugar'), 300),
        new Ingredient(Products.getByName('Baking Powder'), 3),
        new Ingredient(Products.getByName('Baking Soda'), 2.5),
        new Ingredient(Products.getByName('Salt'), 1),
        new Ingredient(Products.getByName('Oil'), 30),
      ]
    ),
    new Recipe(
      'Chicken Souflaki',
      'description',
      'assets/images/main_img_4.jpeg',
      []
    ),
  ];

  private static readonly _recipesMap: ReadonlyMap<string, Recipe> = new Map(
    this.all.map((r) => [r.title, r])
  );

  public static getByTitle(title: string): Recipe {
    return this._recipesMap.get(title)!;
  }
}
