<div id="selector">

</div>

<style lang="scss">
    #selector {
        height: 100vh;
        position: relative;
    }
</style>

<script lang="ts">
	import { onMount } from "svelte";

    interface ShapeObj {
        x: number;
        y: number;
        size: number;
    }

	export let elemShape: 'circle' | 'square';
    export let size: { min: number; max: number } = { min: 100, max: 500 };
	export let shapes: { text: string; backgroundImage?: string; onClick?: () => any }[];
    export let bounds: { top?: number, bottom?: number; left?: number; right?: number } = { top: 100, bottom: 0, left: 100, right: 0 };
    
    let generated = new Promise<boolean>((resolve, reject) => {});
    let reserved: ShapeObj[] = [];

    
    function generate(): void {
        let selector = document.getElementById('selector');
        const canvas = document.createElement('canvas');
        canvas.width = selector.offsetWidth;
        canvas.height = selector.offsetHeight;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        selector.appendChild(canvas);
    }

	onMount(() => {
        generate();
	});
</script>
