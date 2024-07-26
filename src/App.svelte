<script lang="ts">
  import Shopping from "./shopping/Shopping.svelte";
  import Recipes from "./recipes/Recipes.svelte";
  import { getCurrentView, recipesList, setCurrentView } from "./data/data.exports";
  import type { RecipesListItem } from "./data/data.service";

  enum View {
    Recipes,
    ShoppingList,
  }

  let currentView = getCurrentView();
  let searchText = '';
  $: filteredRecipesList = filterBySearchText($recipesList, searchText);

  function onCartClick() {
    currentView = View.ShoppingList;
    setCurrentView(currentView);
  }

  function onMealClick() {
    currentView = View.Recipes;
    setCurrentView(currentView);
  }

  function filterBySearchText(recipesList: RecipesListItem[], searchText: string): RecipesListItem[] {
    if(searchText.length == 0) return recipesList;

    const searchWords = searchText.toLocaleLowerCase().split(/\s/);
    return recipesList.filter(r => {
      const combined = (r.recipe.title + r.recipe.description + r.recipe.ingredients.map(i => i.product.name).join()).toLocaleLowerCase();
      return searchWords.every(w => combined.includes(w));
    });
  }
</script>

<main>
  <div class="floating-toolbar">
    {#if currentView == View.Recipes}
    <input type="text" class="search-box" placeholder="Search..." bind:value={searchText}/>
    <button on:click={onCartClick}><i class="fa-solid fa-cart-shopping"></i></button>
    {:else if currentView == View.ShoppingList}
    <button on:click={onMealClick}><i class="fa-solid fa-arrow-left"></i></button>
    <h1>Shopping list</h1>
    {/if}
  </div>
  <div class="main-view">
    {#if currentView == View.Recipes}
    <Recipes recipesList={filteredRecipesList}></Recipes>
    {:else if currentView == View.ShoppingList}
    <Shopping></Shopping>
    {/if}
  </div>
</main>

<style lang="scss">
.floating-toolbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 64px;

  position: sticky;
  top: 0;
  z-index: 1;

  background-color: lightgray;

  h1 {
    font-family: Roboto,sans-serif;
  }

  .search-box {
    width: 72%;
    height: 40px;
    padding-left: 16px;

    border-radius: 16px;
    font-size: 24px;
  }

  button {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: white;
    font-size: 24px;

    border: solid 1px grey;
    color: black; // safari/iphone
    padding: 0; // safari/iphone

    &:hover {
      background-color: lightgray;
    }
    &:active {
      border: solid 3px grey;
    }
  }
}

</style>
