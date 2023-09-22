import { Product, Unit } from '../models/product.model';

export class Products {
  public static readonly all = [
    new Product('Avocado', Unit.piece),
    new Product('Baking Powder', Unit.g),
    new Product('Baking Soda', Unit.g),
    new Product('Basil', Unit.g),
    new Product('Butter', Unit.g),
    new Product('Buttermilk', Unit.ml),
    new Product('Chicken Breast', Unit.g),
    new Product('Coconut Flakes', Unit.g),
    new Product('Coconut Milk', Unit.ml),
    new Product('Creme Fraiche', Unit.ml),
    new Product('Cucumber', Unit.piece),
    new Product('Dark Chocolate', Unit.g),
    new Product('Eggs', Unit.piece),
    new Product('Flour', Unit.g),
    new Product('Frozen Salmon', Unit.g),
    new Product('Frozen Vegetables', Unit.g),
    new Product('Garlic', Unit.piece),
    new Product('Gnocchi', Unit.piece),
    new Product('Greek Yogurt', Unit.ml),
    new Product('Ground Beef', Unit.g),
    new Product('Lemon', Unit.piece),
    new Product('Lime', Unit.piece),
    new Product('Mayo', Unit.ml),
    new Product('Milk', Unit.ml),
    new Product('Oil', Unit.ml),
    new Product('Olive Oil', Unit.ml),
    new Product('Onion', Unit.piece),
    new Product('Parmesan Cheese', Unit.g),
    new Product('Pepper', Unit.spice),
    new Product('Pine Nuts', Unit.g),
    new Product('Potatoes', Unit.g),
    new Product('Powdered Sugar', Unit.g),
    new Product('Red Bean (canned)', Unit.g),
    new Product('Rice', Unit.g),
    new Product('Salad', Unit.piece),
    new Product('Salt', Unit.spice),
    new Product('Spinach', Unit.g),
    new Product('Sugar', Unit.g),
    new Product('Sweet Corn (canned)', Unit.g),
    new Product('Tomato Pulp (canned)', Unit.g),
    new Product('Tomato', Unit.piece),
    new Product('Tortillas', Unit.piece),
    new Product('Yellow Paprika', Unit.piece),
  ];

  private static readonly _productsMap: ReadonlyMap<string, Product> = new Map(
    this.all.map((p) => [p.name, p])
  );

  public static getByName(name: string): Product {
    if (!this._productsMap.has(name)) {
      console.error(`${name} does not exist`);
    }
    return this._productsMap.get(name)!;
  }
}
