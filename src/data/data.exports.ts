import type { Recipe } from "../models/recipe.model";
import { DataService, ProductsListItem } from "./data.service";

const dataService = new DataService();

export const recipesList = dataService.recipesList;
export const productsList = dataService.productsList;
export const selectedRecipe = dataService.selectedRecipe;

export function addRecipeToList(recipe: Recipe) {
  return dataService.addRecipeToList(recipe);
}
export function removeRecipeFromList(recipe: Recipe) {
  return dataService.removeRecipeFromList(recipe);
}
export function setCount(recipe: Recipe, count: number) {
  return dataService.setCount(recipe, count);
}
export function checkProduct(product: ProductsListItem) {
  return dataService.checkProduct(product.product);
}
export function uncheckProduct(product: ProductsListItem) {
  return dataService.uncheckProduct(product.product);
}
export function getCurrentView(): number {
  return dataService.getCurrentView();
}
export function setCurrentView(value: number): void {
  return dataService.setCurrentView(value);
}
