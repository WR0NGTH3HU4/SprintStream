{#if ready}
    <div transition:fly="{{ y: 50, duration: 1000 }}" class={clazz}>
        <slot></slot>
    </div>
{/if}

<script lang="ts">
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    let clazz;
    export {clazz as class};
    let ready = false;
    onMount(() => { ready = true; });
</script>