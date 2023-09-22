import { Product } from './product.model';

export class Recipe {
  public readonly index: number;
  public readonly title: string;
  public readonly description: string;
  public readonly imageUrl: string;
  public readonly ingredients: Ingredient[];
}

export class Ingredient {
  constructor(product: Product, amount: number, optional: boolean = false) {
    this.product = product;
    this.amount = amount;
    this.optional = optional;
  }
  public readonly product: Product;
  public readonly amount: number;
  public readonly optional: boolean;
}
