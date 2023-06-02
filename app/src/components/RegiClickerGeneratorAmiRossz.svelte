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
    import { createEventDispatcher } from 'svelte';
	import type { Shape } from "../util/model/Shape";

	export let elemShape: 'circle' | 'square';
    export let size: { min: number; max: number } = { min: 100, max: 200 };
	export let shapes: { id: string; text?: string; backgroundImage?: string; }[];
    // export let bounds: { top?: number, bottom?: number; left?: number; right?: number } = { top: 100, bottom: 0, left: 100, right: 0 };
    
	const dispatch = createEventDispatcher();
    let reserved: Shape[] = [];

    function isColliding(c1: Shape, c2: Shape): boolean {
        if (
            c1.x < c2.x + c2.size &&
            c1.x + c1.size > c2.x &&
            c1.y < c2.y + c2.size &&
            c1.size + c1.y > c2.y
        ) return true;

        return false;
    }

    function canBePlaced(obj: Shape): boolean {
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
            let shape: Shape;
            let shapeMeta = shapes[i];

            /// 1. create a flex row
            /// 2. all of the circles go into that flex row
            /// 3. the page (flexbox at least) is horizontally scrollable
            /// 4. use :nth-child(even) and :nth-child(odd) to offset the circles in opposite directions, like this:
            ///    |--|    |--|
            ///    |--|    |--|
            ///        |--|    |--|
            ///        |--|    |--|
            /// 5. use javascript and give the circles a small translateX and a slightly bigger translateY (random) offset value

            do {
                s = Math.floor(Math.random() * size.max) + size.min;
                x = centerX + Math.floor(Math.random() * centerX);
                y = centerY + Math.floor(Math.random() * centerY);
                shape = { x: x / 2, y: y / 2, size: s };
            } while (!canBePlaced(shape));

            const elem = document.createElement('span');

            elem.innerHTML = shapeMeta.text;
            elem.style.backgroundImage = shapeMeta.backgroundImage ? `url(${shapeMeta.backgroundImage})` : 'none';
            elem.onclick = () => dispatch('shapeClick', { id: shapeMeta.id });
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
