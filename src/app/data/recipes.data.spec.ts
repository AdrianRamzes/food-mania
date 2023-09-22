import { Recipes } from './recipes.data';
import { Product } from '../models/product.model';
import { Products } from './products.data';

describe('recipes.data', () => {
  it('all used products exists', () => {
    const allUsedProducts: Product[] = [];
    Recipes.all.forEach((recipe) =>
      recipe.ingredients.forEach((i) => allUsedProducts.push(i.product))
    );

    allUsedProducts.forEach((product) => {
      const definedProduct = Products.getByName(product.name);
      expect(product.name).toEqual(definedProduct.name);
      expect(product.unit).toEqual(definedProduct.unit);
    });
  });
});
