import { Product } from "./product.model";

export class Recipe {
  constructor(
    title: string,
    description: string,
    steps: string[] = [],
    imageUrl: string,
    ingredients: Ingredient[]
  ) {
    this.title = title;
    this.description = description;
    this.steps = steps;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
  public readonly title: string;
  public readonly description: string;
  public readonly steps: string[];
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
