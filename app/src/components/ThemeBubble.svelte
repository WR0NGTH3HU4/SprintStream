<div>
    <span on:click={() => onClick()} id={theme}></span>
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
	import { ThemeManager } from "../util/theme/ThemeManager";
	import { Themes, type Theme } from "../util/theme/Themes";

    export let theme: string;
    let color: string = Themes[theme][0];

    function onLoad(c) {
        const circle = document.getElementById(theme);
        circle.style.backgroundColor = c;
    }

    function onClick() {
        ThemeManager.switchToTheme(theme as Theme);
    }

    onMount(() => {
        onLoad(color)
    });
</script>
