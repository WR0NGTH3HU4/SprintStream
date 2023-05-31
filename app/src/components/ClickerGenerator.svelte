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

    interface ShapeObjNew {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }

	export let elemShape: 'circle' | 'square';
    export let size: { min: number; max: number } = { min: 10, max: 30 };
	export let shapes: { text: string; backgroundImage?: string; onClick?: () => any }[];
    export let bounds: { top: number, bottom: number; left: number; right: number };
    
    let reserved: ShapeObj[] = [];

    function isColliding(c1: ShapeObj, c2: ShapeObj): boolean {
        let c1n: ShapeObjNew = {
            x1: c1.x,
            y1: c1.y,
            x2: c1.x + c1.size,
            y2: c1.y + c1.size,
        }

        let c2n: ShapeObjNew = {
            x1: c2.x,
            y1: c2.y,
            x2: c2.x + c2.size,
            y2: c2.y + c2.size,
        }

        if (c1n.x1 < c2n.x1 || c2n.x1 > c1n.x2) {
            return false;
        }

        if (c1n.y1 < c2n.y1 || c2n.y1 > c1n.y2) {
            return false;
        }

        return true;
    }

    function canBePlaced(obj: ShapeObj): boolean {
        for (let resObj of reserved) {
            if (
                isColliding(resObj, obj)
            ) {
                console.log("asd")
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
                alert("asdasd")
                i--;
                continue;
            }

            let shape = shapes[i];

			const elem = document.createElement('span');

			elem.innerHTML = shape.text;
			elem.style.backgroundImage = shape.backgroundImage ? `url(${shape.backgroundImage})` : 'none';
			elem.onclick = shape.onClick;
			elem.style.borderRadius = elemShape == 'circle' ? '100%' : '20px';
			elem.style.lineHeight = elem.style.width = elem.style.height = `${s}vw`;
			elem.style.position = 'absolute';
			elem.style.transform = 'translate(-50%, -50%)';
			elem.style.backgroundColor = 'black';
			elem.style.top = `${x}px`;
			elem.style.left = `${y}px`;
            elem.style.textAlign = 'center';

			selector.appendChild(elem);
		}
	});
</script>
