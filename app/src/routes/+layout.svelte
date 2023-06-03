<main>
    <Navbar />
    <slot></slot>
</main>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    :global(*) {
        padding: 0;
        margin: 0;
    }

    :global(body) {
        width: 100vw;
        max-width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    
    :global(nav) {
        position: absolute;
        width: 100%;
        box-sizing: border-box;
        z-index: 100;
    }
</style>

<script lang="ts">
	import { onMount } from "svelte";
	import Navbar from "../components/Navbar.svelte";
    import { ThemeManager } from "../util/theme/ThemeManager";
    
    onMount(() => {
        ThemeManager.start();
    })
</script>
