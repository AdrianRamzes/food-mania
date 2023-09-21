import { Recipe } from '../models/recipe.model';

export const recipes = [
  {
    index: 0,
    title: 'Simple Brownie',
    description: 'description',
    imageUrl: 'assets/images/main_img_0.jpeg',
    ingredients: [
      { productId: 0, amount: 250 }, // dark chocolate: 250g
      { productId: 1, amount: 200 }, // butter: 200g
      { productId: 2, amount: 3 }, // eggs: 3
      { productId: 3, amount: 250 }, // sugar: 250g
      { productId: 4, amount: 135 }, // flour: 135g
      { productId: 5, amount: 1 }, // salt: 0g
    ],
  } as Recipe,
  {
    index: 1,
    title: 'Baked Salmon With Vegetables',
    description: 'description',
    imageUrl: 'assets/images/main_img_1.jpeg',
    ingredients: [
      { productId: 6, amount: 250 }, // Frozen Salmon: 250g
      { productId: 7, amount: 700 }, // Frozen Vegetables: 700g
    ],
  } as Recipe,
  {
    index: 2,
    title: 'Simple Burrito',
    description: 'description',
    imageUrl: 'assets/images/main_img_2.jpeg',
    ingredients: [
      { productId: 5, amount: 100 }, // Salt
      { productId: 9, amount: 4 }, // Tortillas: 4
      { productId: 10, amount: 350 }, // Sweet Corn (canned): 350g
      { productId: 11, amount: 500 }, // Ground Beef: 500g
      { productId: 12, amount: 1 }, // Avocado: 1
      { productId: 13, amount: 1 }, // Onion: 1
      { productId: 14, amount: 2 }, // Tomato: 2
      { productId: 15, amount: 100 }, // Pepper
      { productId: 16, amount: 200 }, // Red Bean (canned): 200g
      { productId: 18, amount: 100 }, // Rice: 100g
    ],
  } as Recipe,
  {
    index: 3,
    title: 'American Pancakes',
    description: 'description',
    imageUrl: 'assets/images/main_img_3.jpeg',
    ingredients: [
      { productId: 2, amount: 1 }, // Eggs: 1
      { productId: 4, amount: 300 }, // Flour: 300g
      { productId: 20, amount: 300 }, // Buttermilk: 300ml
      { productId: 24, amount: 300 }, // Powdered Sugar: 5g
      { productId: 21, amount: 3 }, // Baking Powder: 3g
      { productId: 23, amount: 2.5 }, // Baking Soda: 2.5g
      { productId: 5, amount: 1 }, // Salt
      { productId: 22, amount: 30 }, // Oil
    ],
  } as Recipe,
];
