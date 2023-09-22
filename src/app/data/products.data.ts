import { Product, Unit } from '../models/product.model';

export class Products {
  public static readonly all = [
    new Product('Avocado', Unit.piece),
    new Product('Baking Powder', Unit.g),
    new Product('Baking Soda', Unit.g),
    new Product('Butter', Unit.g),
    new Product('Buttermilk', Unit.ml),
    new Product('Dark Chocolate', Unit.g),
    new Product('Eggs', Unit.piece),
    new Product('Flour', Unit.g),
    new Product('Frozen Salmon', Unit.g),
    new Product('Frozen Vegetables', Unit.g),
    new Product('Ground Beef', Unit.g),
    new Product('Mayo', Unit.ml),
    new Product('Milk', Unit.ml),
    new Product('Oil', Unit.ml),
    new Product('Onion', Unit.piece),
    new Product('Pepper', Unit.spice),
    new Product('Potatoes', Unit.g),
    new Product('Powdered Sugar', Unit.g),
    new Product('Red Bean (canned)', Unit.g),
    new Product('Rice', Unit.g),
    new Product('Salt', Unit.spice),
    new Product('Sugar', Unit.g),
    new Product('Sweet Corn (canned)', Unit.g),
    new Product('Tomato', Unit.piece),
    new Product('Tortillas', Unit.piece),
  ];

  private static readonly _productsMap: ReadonlyMap<string, Product> = new Map(
    this.all.map((p) => [p.name, p])
  );

  public static getByName(name: string): Product {
    return this._productsMap.get(name)!;
  }
}
