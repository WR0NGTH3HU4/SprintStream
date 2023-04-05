<main>
	<div class="cim">
		<h1>SprintStream</h1>
	</div>
	<div class="modellek">
		<h3>Scrum</h3>
		<img src="icons/downarrow.png" alt="down_arrow" />
	</div>
	<div class="modellek">
		<h3>Vízesés</h3>
		<img src="icons/downarrow.png" alt="down_arrow" />
	</div>
	<div class="modellek">
		<h3>Rólunk</h3>
		<img src="icons/downarrow.png" alt="down_arrow" />
	</div>
	<div class="gomb">
		<img on:click={szinvalaszto} src="icons/gear.png" alt="gear" />
		<div class="paletta">
			<!--Ide kerül majd a színpaletta-->
			<img src="" />
		</div>
	</div>
</main>

<style>
    .gomb{
        position: fixed;
    }
	.gomb img {
		width: 40px;
		height: 40px;
	}
	main {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		padding-right: 15px;
		padding-left: 15px;
		z-index: 0;
	}
	.modellek {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		background-color: #e2e2e2;
		padding: 10px;
		height: 2rem;
		width: 9rem;
		border-radius: 20px;
	}
	.modellek img {
		width: 20px;
	}
    .paletta img{
        z-index: 1;
    }
	.paletta {
		z-index: 1;
	}
</style>

<script lang="ts">
    import { onMount } from 'svelte';

    let paletta: any;
    let kapcsolas = false;

    function szinvalaszto() {
        if (kapcsolas == false) {
            paletta.style.display = 'none';
        }
        else if(kapcsolas==true){
            paletta.style.display ='block';
        }

        kapcsolas=!kapcsolas;
    }

	onMount(() => {
		paletta = document.querySelector('.paletta');
    });
</script>
