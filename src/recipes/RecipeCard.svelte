<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Recipe } from '../models/recipe.model';

    export let recipe: Recipe;
    export let count = 0;

    const dispatch = createEventDispatcher();

    function onUncheckClick() {
        count = 0;
        dispatch("countChange", {
            recipe: recipe,
            count: count,
        });
    }

    function onMinusClick() {
        count = Math.max(count - 1, 0);
        dispatch("countChange", {
            recipe: recipe,
            count: count,
        });
    }

    function onPlusClick() {
        count++;
        dispatch("countChange", {
            recipe: recipe,
            count: count,
        });
    }
</script>

<div class="card">
    <div class="card-header">
        <h3>{recipe.title}</h3>
    </div>
    <div class="card-content">
        <img src="{recipe.imageUrl}" alt="recipe">
        {#if count}
        <button on:click={onUncheckClick}><i class="fa-solid fa-check"></i></button>
        {:else}
        <button on:click={onPlusClick}><i class="fa-solid fa-cart-plus"></i></button>
        {/if}
    </div>
    <div class="card-actions">
        <button on:click={onMinusClick}><i class="fa-solid fa-minus"></i></button>
        <p>{count}</p>
        <button on:click={onPlusClick}><i class="fa-solid fa-plus"></i></button>
    </div>
</div>

<style lang="scss">
    .card {
        display: block;
        position: relative;
        padding: 16px;

        max-width: 300px;
        margin: 10px;
        text-align: center;
        border: 1px solid lightgray;
        border-radius: 8px;

        h3 {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            font-family: Roboto,sans-serif;
            letter-spacing: .009375em;
            margin: 0 0 16px;
        }

        img {
            width: 300px;
            height: 300px;
            object-fit: cover;
        }

    }

    .card-header {
        display: block;
        margin: 0 0 16px;
    }

    .card-content {
        width: 300px;
        height: 300px;
        object-fit: cover;
        margin: 0 -16px 16px -16px;

        button {
            position: absolute;
            top: 72%;
            left: 86%;

            width: 32px;
            height: 32px;
            background-color: white;
            border: solid 1px lightgray;
            border-radius: 16px;
            &:hover {
                background-color: lightgray;
            }
            &:active {
                border: solid 1px grey;
            }
        }
    }

    .card-actions {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        button {
            width: 32px;
            height: 32px;
            background-color: white;
            border: solid 1px lightgray;
            border-radius: 16px;
            &:hover {
                background-color: lightgray;
            }
            &:active {
                border: solid 1px grey;
            }
        }
    }
</style>