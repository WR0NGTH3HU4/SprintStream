<div class="combo">
    <span class="name" on:click={ () => { openCombo() } }>
        { name }
        <span class="material-symbols-rounded">
            arrow_drop_down
        </span>
    </span>
    {#if opened}
        <div transition:slide={{ easing:elasticOut, duration: 1000 }} class="options">
            {#each options as option}
                <span on:click={ option.onClick }>{ option.name }</span>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .combo {
        background-color: #e2e2e2;
        color: black;
        border: black 2px solid;
        border-radius: 8px;
        padding: .5rem;
    }

    hr {
        color: black;
        background-color: black;
    }

    .name {
        color: blue;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .options {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .options::before {
        display: block;
        border-top: 3px solid black;
    }
</style>

<script lang="ts">
    import { slide } from 'svelte/transition';
    import { elasticOut } from "svelte/easing";

    export let name: string;
    export let options: { name: string; onClick?: () => void }[];
    let opened: boolean = false;

    function openCombo(): void { opened = !opened }
</script>