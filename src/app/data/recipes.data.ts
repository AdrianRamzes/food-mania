import { Ingredient, Recipe } from '../models/recipe.model';
import { Products } from '../data/products.data';

export const recipes = [
  {
    index: 0,
    title: 'Simple Brownie',
    description: 'description',
    imageUrl: 'assets/images/main_img_0.jpeg',
    ingredients: [
      new Ingredient(Products.Dark_Chocolate, 250),

      new Ingredient(Products.Butter, 200),
      new Ingredient(Products.Eggs, 3),
      new Ingredient(Products.Sugar, 250),
      new Ingredient(Products.Flour, 135),
      new Ingredient(Products.Salt, 1),
    ],
  } as Recipe,
  {
    index: 1,
    title: 'Baked Salmon With Vegetables',
    description: 'description',
    imageUrl: 'assets/images/main_img_1.jpeg',
    ingredients: [
      new Ingredient(Products.Frozen_Salmon, 250),
      new Ingredient(Products.Frozen_Vegetables, 700),
    ],
  } as Recipe,
  {
    index: 2,
    title: 'Simple Burrito',
    description: 'description',
    imageUrl: 'assets/images/main_img_2.jpeg',
    ingredients: [
      new Ingredient(Products.Salt, 1),
      new Ingredient(Products.Tortillas, 4),
      new Ingredient(Products.Sweet_Corn_canned, 350),
      new Ingredient(Products.Ground_Beef, 500),
      new Ingredient(Products.Avocado, 1),
      new Ingredient(Products.Onion, 1),
      new Ingredient(Products.Tomato, 2),
      new Ingredient(Products.Pepper, 100),
      new Ingredient(Products.Red_Bean_canned, 200),
      new Ingredient(Products.Rice, 100),
    ],
  } as Recipe,
  {
    index: 3,
    title: 'American Pancakes',
    description: 'description',
    imageUrl: 'assets/images/main_img_3.jpeg',
    ingredients: [
      new Ingredient(Products.Eggs, 1),
      new Ingredient(Products.Flour, 300),
      new Ingredient(Products.Butter, 300),
      new Ingredient(Products.Powdered_Sugar, 300),
      new Ingredient(Products.Baking_Powder, 3),
      new Ingredient(Products.Baking_Soda, 2.5),
      new Ingredient(Products.Salt, 1),
      new Ingredient(Products.Oil, 30),
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
