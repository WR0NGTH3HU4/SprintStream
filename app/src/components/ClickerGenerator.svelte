<div id="selector">
    
</div>

<style lang="scss">
    #selector {
        height: 100vh;
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
    export let size: { min: number; max: number } = { min: 10, max: 20 };
	export let shapes: { text: string; backgroundImage?: string; onClick?: () => any }[];
    // export let bounds: { top: number, bottom: number; left: number; right: number };
    
    let reserved: ShapeObj[] = [];

    function isColliding(c1: ShapeObj, c2: ShapeObj): boolean {
        if (
            c1.x < c2.x + c2.size &&
            c1.x + c1.size > c2.x &&
            c1.y < c2.y + c2.size &&
            c1.size + c1.y > c2.y
        ) return true;

        return false;
    }

    function canBePlaced(obj: ShapeObj): boolean {
        for (let resObj of reserved) {
            if (isColliding(resObj, obj)) {
                return false;
            }
        }
        return true;
    }

	onMount(() => {
		const selector = document.getElementById('selector');
		const width: number = selector.offsetWidth;
		const height: number = selector.offsetHeight;

        for (let i = 0; i < shapes.length; i++) {

            const x = Math.floor(Math.random() * height);
            const y = Math.floor(Math.random() * width);
            const s: number = Math.floor(Math.random() * size.max) + size.min;
            const shape: ShapeObj = {x, y, size: s};
            let shapeMeta = shapes[i];
            
            if (!canBePlaced(shape)) {
                i--;
                continue;
            }
            
			const elem = document.createElement('span');
            
			elem.innerHTML = shapeMeta.text;
			elem.style.backgroundImage = shapeMeta.backgroundImage ? `url(${shapeMeta.backgroundImage})` : 'none';
			elem.onclick = shapeMeta.onClick;
			elem.style.borderRadius = elemShape == 'circle' ? '100%' : '20px';
			elem.style.lineHeight = elem.style.width = elem.style.height = `${s}vw`;
			elem.style.position = 'absolute';
			elem.style.transform = 'translate(-50%, -50%)';
			elem.style.backgroundColor = 'black';
			elem.style.top = `${x}px`;
			elem.style.left = `${y}px`;
            elem.style.textAlign = 'center';
            
            reserved.push(shape);
			selector.appendChild(elem);
		}
	});
</script>
