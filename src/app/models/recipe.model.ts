export class Recipe {
    public readonly id: number;
    public readonly title: string;
    public readonly description: string;
    public readonly imageUrl: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}