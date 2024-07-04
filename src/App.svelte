<script lang="ts">
  import Shopping from "./shopping/Shopping.svelte";
  import Recipes from "./recipes/Recipes.svelte";
    import { getCurrentView, setCurrentView } from "./data/data.exports";


  enum View {
    Recipes,
    ShoppingList,
  }

  let currentView = getCurrentView();

  function onCartClick() {
    currentView = View.ShoppingList;
    setCurrentView(currentView);
  }

  function onMealClick() {
    currentView = View.Recipes;
    setCurrentView(currentView);
  }
</script>

<main>
  <div class="floating-toolbar">
    {#if currentView == View.Recipes}
    <h1>Select meals</h1>
    <button on:click={onCartClick}><i class="fa-solid fa-cart-shopping"></i></button>
    {:else if currentView == View.ShoppingList}
    <h1>Shopping list</h1>
    <button on:click={onMealClick}><i class="fa-solid fa-utensils"></i></button>
    {/if}
  </div>
  <div class="main-view">
    {#if currentView == View.Recipes}
    <Recipes></Recipes>
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

  button {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: white;
    font-size: 24px;

    border: solid 1px grey;

    &:hover {
      background-color: lightgray;
    }
    &:active {
      border: solid 3px grey;
    }
  }
}

</style>
