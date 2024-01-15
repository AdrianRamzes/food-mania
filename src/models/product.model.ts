export class Product {
    constructor(name: string, unit: Unit) {
      this.name = name;
      this.unit = unit;
    }
    public readonly name: string;
    public readonly unit: Unit;
  }
  
  export enum Unit {
    piece,
    spice,
    g,
    kg,
    l,
    ml,
  }
  