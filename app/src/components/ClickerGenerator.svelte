<div id="selector">
    
</div>

<style lang="scss">
    #selector {
        height: 100vh;
    }
</style>

<script lang="ts">
	import { onMount } from "svelte";

	export let elemShape: 'circle' | 'square';
    export let size: { min: number; max: number } = { min: 10, max: 30 };
	export let shapes: { text: string; backgroundImage?: string; onClick?: () => any }[];
    
    let reserved: { x: number; y: number; size: number }[] = [];

    function canBePlaced(obj: { x: number; y: number; size: number }): boolean {
        for (let resObj of reserved) {
            if (resObj.x + resObj.size > obj.x || resObj.x - resObj.size < obj.x ||
                resObj.y + resObj.size > obj.y || resObj.y - resObj.size < obj.y) {
                return false;
            }
        }
        return true;
    }

	onMount(() => {
		const selector = document.getElementById('selector');
		let width = selector.offsetWidth;
		let height = selector.offsetHeight;

        for (let i = 0; i < shapes.length; i++) {

            let x = Math.floor(Math.random() * height);
            let y = Math.floor(Math.random() * width);
            let s: number = Math.floor(Math.random() * size.max) + size.min;

            if (!canBePlaced({x, y, size: s})) {
                i--;
                continue;
            }

            let shape = shapes[i];

			const elem = document.createElement('span');

			elem.innerHTML = shape.text;
			elem.style.backgroundImage = shape.backgroundImage ? `url(${shape.backgroundImage})` : 'none';
			elem.onclick = shape.onClick;
			elem.style.borderRadius = elemShape == 'circle' ? '100%' : '0px';
			elem.style.width = elem.style.height = `${s}vw`;
			elem.style.position = 'absolute';
			elem.style.transform = 'translate(-50%, -50%)';
			elem.style.backgroundColor = 'black';
			elem.style.top = `${x}px`;
			elem.style.left = `${y}px`;

			selector.appendChild(elem);
		}
	});
</script>
