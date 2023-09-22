import { Product, Unit } from '../models/product.model';

export class Products {
  public static readonly Avocado = new Product('Avocado', Unit.piece);
  public static readonly Baking_Powder = new Product('Baking Powder', Unit.g);
  public static readonly Baking_Soda = new Product('Baking Soda', Unit.g);
  public static readonly Butter = new Product('Butter', Unit.g);
  public static readonly Buttermilk = new Product('Buttermilk', Unit.ml);
  public static readonly Dark_Chocolate = new Product('Dark Chocolate', Unit.g);
  public static readonly Eggs = new Product('Eggs', Unit.piece);
  public static readonly Flour = new Product('Flour', Unit.g);
  public static readonly Frozen_Salmon = new Product('Frozen Salmon', Unit.g);
  public static readonly Frozen_Vegetables = new Product(
    'Frozen Vegetables',
    Unit.g
  );
  public static readonly Ground_Beef = new Product('Ground Beef', Unit.g);
  public static readonly Mayo = new Product('Mayo', Unit.ml);
  public static readonly Milk = new Product('Milk', Unit.ml);
  public static readonly Oil = new Product('Oil', Unit.ml);
  public static readonly Onion = new Product('Onion', Unit.piece);
  public static readonly Pepper = new Product('Pepper', Unit.spice);
  public static readonly Potatoes = new Product('Potatoes', Unit.g);
  public static readonly Powdered_Sugar = new Product('Powdered Sugar', Unit.g);
  public static readonly Red_Bean_canned = new Product(
    'Red Bean (canned)',
    Unit.g
  );
  public static readonly Rice = new Product('Rice', Unit.g);
  public static readonly Salt = new Product('Salt', Unit.spice);
  public static readonly Sugar = new Product('Sugar', Unit.g);
  public static readonly Sweet_Corn_canned = new Product(
    'Sweet Corn (canned)',
    Unit.g
  );
  public static readonly Tomato = new Product('Tomato', Unit.piece);
  public static readonly Tortillas = new Product('Tortillas', Unit.piece);

  public static getByName(name: string): Product {
    switch (name) {
      case 'Avocado':
        return this.Avocado;
      case 'Baking Powder':
        return this.Baking_Powder;
      case 'Baking Soda':
        return this.Baking_Soda;
      case 'Butter':
        return this.Butter;
      case 'Buttermilk':
        return this.Buttermilk;
      case 'Dark Chocolate':
        return this.Dark_Chocolate;
      case 'Eggs':
        return this.Eggs;
      case 'Flour':
        return this.Flour;
      case 'Frozen Salmon':
        return this.Frozen_Salmon;
      case 'Frozen Vegetables':
        return this.Frozen_Vegetables;
      case 'Ground Beef':
        return this.Ground_Beef;
      case 'Mayo':
        return this.Mayo;
      case 'Milk':
        return this.Milk;
      case 'Oil':
        return this.Oil;
      case 'Onion':
        return this.Onion;
      case 'Pepper':
        return this.Pepper;
      case 'Potatoes':
        return this.Potatoes;
      case 'Powdered Sugar':
        return this.Powdered_Sugar;
      case 'Red Bean (canned)':
        return this.Red_Bean_canned;
      case 'Rice':
        return this.Rice;
      case 'Salt':
        return this.Salt;
      case 'Sugar':
        return this.Sugar;
      case 'Sweet Corn (canned)':
        return this.Sweet_Corn_canned;
      case 'Tomato':
        return this.Tomato;
      case 'Tortillas':
        return this.Tortillas;
    }
    return this.Salt;
  }
}
