import { Product } from "src/app/models/product.model";

export class Recipe {
    public readonly id: number;
    public readonly title: string;
    public readonly description: string;
    public readonly imageUrl: string;
    public readonly products: [number, number][];
}