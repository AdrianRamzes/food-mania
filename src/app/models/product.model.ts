export class Product {
    public readonly id: number;
    public readonly name: string;
    public readonly unit: Units;
};

export enum Units {
    piece,
    spice,
    g,
    kg,
    l,
    ml,
}