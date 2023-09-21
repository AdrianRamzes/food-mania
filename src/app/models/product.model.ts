export class Product {
  public readonly index: number;
  public readonly name: string;
  public readonly unit: Units;
}

export enum Units {
  piece,
  spice,
  g,
  kg,
  l,
  ml,
}
