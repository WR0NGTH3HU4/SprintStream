<main>
	<div class="cim">
		<h1>SprintStream</h1>
	</div>
	<div class="modellek">
		<h3>Scrum</h3>
		<img on:click={lenyit_s} src="icons/downarrow.png" alt="down_arrow" />
		<div class="lenyilo-s">
			<h3 class="lenyilo-s">Modell</h3>
			<h3 class="lenyilo-s">Quiz</h3>
		</div>
	</div>
	<div class="modellek">
		<h3>Vízesés</h3>
		<img on:click={lenyit_v} src="icons/downarrow.png" alt="down_arrow" />
		<div class="lenyilo-v">
			<h3 class="lenyilo-v">Modell</h3>
			<h3 class="lenyilo-v">Quiz</h3>
		</div>
	</div>
	<div class="modellek">

			<h3>Rólunk</h3>
			<img on:click={lenyit_r} src="icons/downarrow.png" alt="down_arrow" />


		<div class="lenyilo-r">
			<h3 class="lenyilo-r">Termék Backlog</h3>
			<h3 class="lenyilo-r">Sprint Backlog</h3>
		</div>
	</div>
	<div class="gomb">
		<img on:click={szinvalaszto} src="icons/gear.png" alt="gear" />
		<div class="paletta">
			<!--Ide kerül majd a színpaletta-->
			<img src="Színek/caribbean.png" >
		</div>
	</div>
</main>

<style>

    .gomb{
        position: relative;
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
		position: relative;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		background-color: #e2e2e2;
		padding: 10px;
		height: 2rem;
		width: 9rem;
		border-radius: 20px;
		z-index: 0;
	}
	.modellek img {
		position: relative;
		width: 20px;
	}
	.alap{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
    .paletta img{
        z-index: 1;
    }
	.paletta {
		position: fixed;
		z-index: 1;
	}
	.lenyilo{
		background-color: #e2e2e2;
		position: fixed;
		z-index: 1;
	}
</style>

<script lang="ts">
    import { onMount } from 'svelte';

    let paletta: any;
    let kapcsolas_g = false;
	let kapcsolas_r = false;
	let kapcsolas_v = false;
	let kapcsolas_s = false;
	let lenyilas_r: any;
	let lenyilas_v: any;
	let lenyilas_s: any;


    function szinvalaszto() {
        if (kapcsolas_g == false) {
            paletta.style.display = 'none';
        }
        else if(kapcsolas_g==true){
            paletta.style.display ='block';
        }

        kapcsolas_g=!kapcsolas_g;
    }

	onMount(() => {
		paletta = document.querySelector('.paletta');
		lenyilas_r =document.querySelector('.lenyilo-r')
		lenyilas_v =document.querySelector('.lenyilo-v')
		lenyilas_s =document.querySelector('.lenyilo-s')
    });

	function lenyit_r(){
		if (kapcsolas_r == false) {
            lenyilas_r.style.display = 'none';
        }
        else if(kapcsolas_r==true){
            lenyilas_r.style.display ='block';
        }

        kapcsolas_r=!kapcsolas_r;
	}


	function lenyit_v(){
		if (kapcsolas_v == false) {
            lenyilas_v.style.display = 'none';
        }
        else if(kapcsolas_v==true){
            lenyilas_v.style.display ='block';
        }

        kapcsolas_v=!kapcsolas_v;
	}


	function lenyit_s(){
		if (kapcsolas_s == false) {
            lenyilas_s.style.display = 'none';
        }
        else if(kapcsolas_s==true){
            lenyilas_s.style.display ='block';
        }

        kapcsolas_s=!kapcsolas_s;
	}

</script>
