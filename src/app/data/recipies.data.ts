import { Recipe } from '../models/recipe.model';

export const recipes = [
    {
        id: 0,
        title: 'Simple Brownie',
        description: 'description',
        imageUrl: 'https://images.unsplash.com/photo-1605190557072-1fe6a230ee65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib',
        products: [
            [0, 250],   // dark chocolate: 250g
            [1, 200],   // butter: 200g
            [2, 3],     // eggs: 3
            [3, 250],   // sugar: 250g
            [4, 135],   // flour: 135g
            [5, 0],     // salt: 0g
        ]
    } as Recipe,
];