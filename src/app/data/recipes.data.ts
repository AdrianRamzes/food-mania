import { Ingredient, Recipe } from '../models/recipe.model';
import { Products } from '../data/products.data';

export const recipes = [
  {
    index: 0,
    title: 'Simple Brownie',
    description: 'description',
    imageUrl: 'assets/images/main_img_0.jpeg',
    ingredients: [
      new Ingredient(Products.getByName('Dark Chocolate'), 250),
      new Ingredient(Products.getByName('Butter'), 200),
      new Ingredient(Products.getByName('Eggs'), 3),
      new Ingredient(Products.getByName('Sugar'), 250),
      new Ingredient(Products.getByName('Flour'), 135),
      new Ingredient(Products.getByName('Salt'), 1),
    ],
  } as Recipe,
  {
    index: 1,
    title: 'Baked Salmon With Vegetables',
    description: 'description',
    imageUrl: 'assets/images/main_img_1.jpeg',
    ingredients: [
      new Ingredient(Products.getByName('Frozen Salmon'), 250),
      new Ingredient(Products.getByName('Frozen Vegetables'), 700),
    ],
  } as Recipe,
  {
    index: 2,
    title: 'Simple Burrito',
    description: 'description',
    imageUrl: 'assets/images/main_img_2.jpeg',
    ingredients: [
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
    ],
  } as Recipe,
  {
    index: 3,
    title: 'American Pancakes',
    description: 'description',
    imageUrl: 'assets/images/main_img_3.jpeg',
    ingredients: [
      new Ingredient(Products.getByName('Eggs'), 1),
      new Ingredient(Products.getByName('Flour'), 300),
      new Ingredient(Products.getByName('Butter'), 300),
      new Ingredient(Products.getByName('Powdered Sugar'), 300),
      new Ingredient(Products.getByName('Baking Powder'), 3),
      new Ingredient(Products.getByName('Baking Soda'), 2.5),
      new Ingredient(Products.getByName('Salt'), 1),
      new Ingredient(Products.getByName('Oil'), 30),
    ],
  } as Recipe,
  {
    index: 3,
    title: 'Chicken Souflaki',
    description: 'description',
    imageUrl: 'assets/images/main_img_4.jpeg',
    ingredients: [],
  } as Recipe,
];
