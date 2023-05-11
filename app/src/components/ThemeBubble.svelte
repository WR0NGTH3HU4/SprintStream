<div>
    <span id={theme}></span>
</div>

<style>
    span {
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        box-sizing: border-box;
    }
</style>

<script lang="ts">
	import { onMount } from "svelte";

    export let theme: string;
    export let color: string;

    function onLoad(c) {
        const circle = document.getElementById(theme);
        circle.style.backgroundColor = c;
    }

    onMount(() => {
        onLoad(color)
    });
</script>
