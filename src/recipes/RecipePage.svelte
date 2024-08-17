<script lang="ts">
    import { type Recipe } from "../models/recipe.model";

    export let recipe: Recipe | null;

</script>

{#if recipe}
<h1>{recipe.title}</h1>
<h2>Ingredients:</h2>
<ol>
    {#each recipe.ingredients as ingredient}
    <li>{ingredient.product.name}</li>
    {/each }
</ol>

<h2>Steps:</h2>
<ol>
    {#each recipe.steps as step}
    <li>{step}</li>
    {/each }
</ol>
{/if}
