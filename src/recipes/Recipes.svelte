<script lang="ts">
    import RecipeCard from "../recipes/RecipeCard.svelte";
    import { setCount } from "../data/data.exports";
    import type { RecipesListItem } from "../data/data.service";
  import { createEventDispatcher } from "svelte";

    export let recipesList : RecipesListItem[] = [];
    
    const dispatch = createEventDispatcher();

    function onCountChange(e: CustomEvent) {
        setCount(e.detail.recipe, e.detail.count);
    }

    function onClicked(e: CustomEvent) {
        dispatch("recipeClicked", { recipe: e.detail.recipe });
    }
</script>

<div class="container">
    {#each recipesList as r}
    <RecipeCard recipe={r.recipe} count={r.count} on:countChange={onCountChange} on:clicked={onClicked}/>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>