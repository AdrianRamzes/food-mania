<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Recipe } from '../models/recipe.model';

    export let recipe: Recipe;
    export let count = 0;

    const dispatch = createEventDispatcher();

    function onRemoveFromCartClick() {
        count = 0;
        dispatch("countChange", {
            recipe: recipe,
            count: count,
        });
    }

    function onAddToCartClick() {
        count=1;
        dispatch("countChange", {
            recipe: recipe,
            count: count,
        });
    }
</script>

<div class="card">
    <div class="card-image">
        <img src="{recipe.imageUrl}" alt="recipe">
        {#if count}
        <button on:click={onRemoveFromCartClick} class="checked-button"><i class="fa-solid fa-check"></i></button>
        {:else}
        <button on:click={onAddToCartClick}><i class="fa-solid fa-cart-plus"></i></button>
        {/if}
    </div>
    <div class="card-title">
        <h3>{recipe.title}</h3>
    </div>
</div>

<style lang="scss">
    .card {
        display: block;
        position: relative;
        overflow: hidden;

        margin: 8px;
        text-align: center;
        border: 1px solid lightgray;
        border-radius: 8px;

        h3 {
            font-size: 16px;
            font-weight: 400;
            font-family: Roboto,sans-serif;
            letter-spacing: .009375em;
        }
    }

    .card-image {
        width: 320px;
        height: 320px;

        img {
            width: 320px;
            height: 320px;
            object-fit: cover;
        }

        button {
            position: absolute;
            top: 65%;
            left: 75%;

            font-size: 32px;

            width: 64px;
            height: 64px;
            background-color: white;
            border: solid 1px lightgray;
            border-radius: 32px;
            &:hover {
                background-color: lightgray;
            }
            &:active {
                border: solid 1px grey;
            }
            &.checked-button {
                background-color: rgb(174, 240, 191);
                &:hover {
                    background-color: rgb(125, 236, 153);
                }
                &:active {
                    border: solid 1px grey;
                }
            }
        }
    }
</style>