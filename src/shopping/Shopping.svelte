<script lang="ts">
    import { recipesList, productsList, removeRecipeFromList, addRecipeToList, checkProduct, uncheckProduct } from "../data/data.exports";
    import type { ProductsListItem, RecipesListItem } from "../data/data.service";

    $: selectedRecipes = $recipesList.filter((r) => r.count > 0);
    $: neededProductsList = $productsList.filter((p) => p.amount > 0);

    function onMinusClick(r: RecipesListItem) {
        removeRecipeFromList(r.recipe);
    }

    function onPlusClick(r: RecipesListItem) {
        addRecipeToList(r.recipe);
    }

    function onProductChecked(product: ProductsListItem, event: any) {
        if(event.target.checked) {
            checkProduct(product);
        } else {
            uncheckProduct(product);
        }
    }
</script>

<h1>Posiłki:</h1>
<ul>
    {#each selectedRecipes as r}
    <li>
        <span>{r.recipe.title}</span>
        <button on:click={() => onMinusClick(r)}><i class="fa-solid fa-minus"></i></button>
        <span>{r.count}</span>
        <button on:click={() => onPlusClick(r)}><i class="fa-solid fa-plus"></i></button>
    </li>
    {/each}
</ul>
<h1>Produkty:</h1>
<ul>
    {#each neededProductsList as p}
    <li class:checked={p.checked}>
        <span>{p.product.name}</span>
        <span>{p.amount}</span>
        <input type="checkbox" checked={p.checked} on:change={(e) => onProductChecked(p, e)}>
    </li>
    {/each}
</ul>


<style>
    .checked {
        text-decoration: line-through;
    }

    button {
        height: 32px;
        width: 32px;
        background-color: white;
        border: solid 1px lightgray;
        border-radius: 16px;
    }
</style>