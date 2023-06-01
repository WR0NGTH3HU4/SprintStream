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
            <slot></slot>
        </div>
    {/if}
</div>

<style lang="scss">
    @use '../scss/nav.scss';

    .combo {
        color: black !important;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .name {
        @extend .nav_link;
        display: flex;
    }

    .options {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #e2e2e2;
        border-radius: 8px;
        margin-top: .25rem;
        padding: .5rem;
        gap: .5rem;
    }

    .options > * {
        position: relative;
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
    //export let childrenClass: string | undefined;
    let opened: boolean = false;

    function openCombo(): void { opened = !opened }
</script>