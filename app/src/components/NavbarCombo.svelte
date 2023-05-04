<div class="combo" on:mouseenter={ () => { openCombo() } } on:mouseleave={ () => { openCombo() } }>
    <span class="name">
        {@html name}
        {#if !noarrow}
            <span class="material-symbols-rounded">
                arrow_drop_down
            </span>
        {/if}
    </span>
    {#if opened}
        <div transition:slide={{ easing:elasticOut, duration: 1000 }} class="options">
            {#each options as option}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span on:click={ option.onClick }>{@html option.name }</span>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .combo {
        color: black !important;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .name {
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .options {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #e2e2e2;
        border-radius: 8px;
        padding: .5rem;
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
    export let noarrow: boolean = false;
    export let options: { name: string; onClick?: () => void }[];
    let opened: boolean = false;

    function openCombo(): void { opened = !opened }
</script>