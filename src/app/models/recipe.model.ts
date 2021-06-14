export class Recipe {
    public readonly index: number;
    public readonly title: string;
    public readonly description: string;
    public readonly imageUrl: string;
    public readonly ingredients: [number, number][];
}