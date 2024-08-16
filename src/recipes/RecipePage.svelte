<script lang="ts">
    import { type Recipe } from "../models/recipe.model";

    export let recipe: Recipe | null;

</script>

{#if recipe}    
<h1>Ingredients:</h1>
<ol>
    {#each recipe.ingredients as ingredient}
    <li>{ingredient.product.name}</li>
    {/each }
</ol>

<h1>Steps:</h1>
<ol>
    {#each recipe.steps as step}
    <li>{step}</li>
    {/each }
</ol>
{/if}
