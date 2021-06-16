import { Recipe } from '../models/recipe.model';

export const recipies = [
    {
        index: 0,
        title: 'Simple Brownie',
        description: 'description',
        imageUrl: 'https://images.unsplash.com/photo-1605190557072-1fe6a230ee65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib',
        ingredients: [
            { productId: 0, amount: 250 },   // dark chocolate: 250g
            { productId: 1, amount: 200 },   // butter: 200g
            { productId: 2, amount: 3 },     // eggs: 3
            { productId: 3, amount: 250 },   // sugar: 250g
            { productId: 4, amount: 135 },   // flour: 135g
            { productId: 5, amount: 1 },     // salt: 0g
        ]
    } as Recipe,
];
