<script lang="ts">
    import RecipeCard from "../recipes/RecipeCard.svelte";
    import { setCount } from "../data/data.exports";
    import type { RecipesListItem } from "../data/data.service";

    export let recipesList : RecipesListItem[] = [];

    function onCountChange(e: CustomEvent) {
        setCount(e.detail.recipe, e.detail.count);
    }
</script>

<div class="container">
    {#each recipesList as r}
    <RecipeCard recipe={r.recipe} count={r.count} on:countChange={onCountChange}/>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>