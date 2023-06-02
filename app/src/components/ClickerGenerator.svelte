<div id="selector">
    <div id="shapes">
        {#each shapes as shape}
            <div class="shape" on:click={() => dispatch('shapeClick', { id: shape.id })} style="
                --size: {Math.floor(Math.random() * 200) + 120}px;
                --color: {shape.backgroundColor || `var(--${Math.floor(Math.random() * 4) + 1})`};
                --offset-x: {Math.floor(Math.random() * 50) - 30}px;
                --offset-y: {Math.floor(Math.random() * 100)}px;
                --border-radius: {elemShape == 'circle' ? '50%' : '15px'};
                --border: {border ? '2px solid black' : 'none'};"
            >
                <!-- if statement ide ha ell bg image -->
                <img class="background-image" src="{shape.backgroundImage}" alt="ja" />
                <span>{shape.text || ''}</span>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @media screen and (max-width: 1100px) {
        #shapes .shape {
            transform: translateX(var(--offset-x)) scale(0.7) !important;

            &:hover {
                transform: translateX(var(--offset-x)) scale(0.8) !important;
            }
        }
    }

    #selector {
        position: relative;

        display: flex;
        align-items: center;
    }

    #shapes {
        flex: 1;
        width: 100vh;
        overflow-x: visible;
        overflow-y: visible;
        align-content: center;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        display: flex;
        gap: 2rem;
        
        .shape {
            position: relative;
            display: flex;
            justify-content: center;
            align-content: center;
            text-align: center;
            overflow: hidden;

            min-width: var(--size);
            width: var(--size);
            min-height: var(--size);
            height: var(--size);
            background-color: var(--color);
            background-size: cover;
            background-position: center;
            transform: translateX(var(--offset-x)) translateY(var(--offset-y));
            transition: transform .2s ease-out;
            line-height: var(--size);
            cursor: pointer;

            border-radius: var(--border-radius);
            border: var(--border);

            &:nth-child(even) {
                margin-top: -1rem;
            }

            &:nth-child(odd) {
                margin-top: 1rem;
            }

            &:hover {
                transform: translateX(var(--offset-x)) translateY(var(--offset-y)) scale(1.2);
                transition: transform .2s ease-out;
            }

            *:not(img:nth-child(1)) {
                z-index: 1;
            }

            img:nth-child(1) {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
            }
        }
    }

</style>

<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	import type { Shape } from "../util/model/Shape";

    export let border: boolean = false;
	export let elemShape: 'circle' | 'square';
    export let size: { min: number; max: number } = { min: 100, max: 200 };
	export let shapes: { id: string; text?: string; backgroundImage?: string; backgroundColor?: string }[];
    // export let bounds: { top?: number, bottom?: number; left?: number; right?: number } = { top: 100, bottom: 0, left: 100, right: 0 };
    
	const dispatch = createEventDispatcher();
</script>
