import { Product, Unit } from '../models/product.model';

export class Products {
  public static readonly all = [
    new Product('Almond', Unit.piece),
    new Product('Avocado', Unit.piece),
    new Product('Baking Powder', Unit.g),
    new Product('Baking Soda', Unit.g),
    new Product('Bao Buns', Unit.piece),
    new Product('Basil', Unit.g),
    new Product('BBQ Sauce', Unit.spice),
    new Product('Broccoli', Unit.g),
    new Product('Butter', Unit.g),
    new Product('Buttermilk', Unit.ml),
    new Product('Carrot', Unit.g),
    new Product('Cherry Tomato', Unit.g),
    new Product('Chicken Breast', Unit.g),
    new Product('Coconut Flakes', Unit.g),
    new Product('Coconut Milk', Unit.ml),
    new Product('Creme Fraiche', Unit.ml),
    new Product('Cucumber', Unit.piece),
    new Product('Curry', Unit.spice),
    new Product('Dark Chocolate', Unit.g),
    new Product('Dried Apricots', Unit.g),
    new Product('Dried Tomato', Unit.g),
    new Product('Eggs', Unit.piece),
    new Product('Feta Cheese', Unit.g),
    new Product('Fettuccine Past', Unit.g),
    new Product('Flour', Unit.g),
    new Product('Frozen Salmon', Unit.g),
    new Product('Frozen Vegetables', Unit.g),
    new Product('Garlic', Unit.piece),
    new Product('Gnocchi', Unit.piece),
    new Product('Greek Yogurt', Unit.ml),
    new Product('Ground Beef', Unit.g),
    new Product('Half Cream', Unit.ml),
    new Product('Lemon', Unit.piece),
    new Product('Lime', Unit.piece),
    new Product('Mayo', Unit.ml),
    new Product('Milk', Unit.ml),
    new Product('Mint', Unit.spice),
    new Product('Mushrooms', Unit.g),
    new Product('Nachos', Unit.g),
    new Product('Natural Yogurt', Unit.ml),
    new Product('Oil', Unit.ml),
    new Product('Olive Oil', Unit.ml),
    new Product('Onion', Unit.piece),
    new Product('Parmesan Cheese', Unit.g),
    new Product('Parsley', Unit.spice),
    new Product('Pepper', Unit.spice),
    new Product('Pine Nuts', Unit.g),
    new Product('Potatoes', Unit.g),
    new Product('Powdered Sugar', Unit.g),
    new Product('Red Bean (canned)', Unit.g),
    new Product('Rice', Unit.g),
    new Product('Rucola', Unit.g),
    new Product('Salad', Unit.piece),
    new Product('Salmon', Unit.g),
    new Product('Salt', Unit.spice),
    new Product('Sesame Oil', Unit.ml),
    new Product('Soya Sauce', Unit.ml),
    new Product('Spinach', Unit.g),
    new Product('Spring Onion', Unit.piece),
    new Product('Sriracha Sauce', Unit.spice),
    new Product('Sugar', Unit.g),
    new Product('Sweet Corn (canned)', Unit.g),
    new Product('Sweet Paprika', Unit.spice),
    new Product('Tomato Pulp (canned)', Unit.g),
    new Product('Tomato', Unit.piece),
    new Product('Tortillas', Unit.piece),
    new Product('Wild Rice', Unit.g),
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
