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

    function generate() {
        const selector = document.getElementById('selector');
        const width: number = selector.offsetWidth;
        const height: number = selector.offsetHeight;
        const centerX: number = width / 2;
        const centerY: number = height / 2;

        for (let i = 0; i < shapes.length; i++) {
            let s: number, x: number, y: number;
            let shape: ShapeObj;
            let shapeMeta = shapes[i];

            do {
                s = Math.floor(Math.random() * size.max) + size.min;
                const offsetX = Math.random() * centerX * 0.5; // Adjust the bias here
                const offsetY = Math.random() * centerY * 0.5; // Adjust the bias here
                x = centerX + (Math.random() < 0.5 ? -1 : 1) * offsetX;
                y = centerY + (Math.random() < 0.5 ? -1 : 1) * offsetY;
                shape = { x, y, size: s };
            } while (!canBePlaced(shape));

            const elem = document.createElement('span');

            elem.innerHTML = shapeMeta.text;
            elem.style.backgroundImage = shapeMeta.backgroundImage ? `url(${shapeMeta.backgroundImage})` : 'none';
            elem.onclick = shapeMeta.onClick;
            elem.style.borderRadius = elemShape == 'circle' ? '100%' : '20px';
            elem.style.lineHeight = elem.style.width = elem.style.height = `${s}px`;
            elem.style.position = 'absolute';
            elem.style.transform = 'translate(-50%, -50%)';
            elem.style.backgroundColor = 'black';
            elem.style.left = `${x - s / 2}px`;
            elem.style.top = `${y - s / 2}px`;
            elem.style.textAlign = 'center';

            reserved.push(shape);
            selector.appendChild(elem);
        }
    }

	onMount(() => {
        generate();
	});
</script>
