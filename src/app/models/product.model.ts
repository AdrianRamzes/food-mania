export class Product {
    public readonly id: number;
    public readonly name: string;
    public readonly unit: Units;
};

export enum Units {
    noUnit,
    g,
    kg,
    l,
    ml,
}