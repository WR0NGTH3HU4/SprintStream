<main>
	
	<div class="cim">
		<h1>SprintStream</h1>
	</div>
	<ul class="modellek">
		<li>
			<ul class="alap alap_s">
				<li>Scrum</li>
				<li><img on:click={lenyit_s} src="icons/downarrow.png" alt="dropdown"></li>
			</ul>
			<div class="lenyilo lenyilo-s">
				<h3>Modell</h3>
				<h3>Quiz</h3>
			</div>
		</li>

		<li>			
			<ul class="alap alap_v">
				<li>Vízesés</li>
				<li><img on:click={lenyit_v} src="icons/downarrow.png" alt="dropdown"></li>
			</ul>
			<div class="lenyilo lenyilo-v">
				<h3>Modell</h3>
				<h3>Quiz</h3>
			</div>

		</li>
		<li>
			<ul class="alap alap_r">
				<li>Rólunk</li>
				<li><img on:click={lenyit_r} src="icons/downarrow.png" alt="dropdown"></li>
			</ul>
			<div class="lenyilo lenyilo-r">
				<h3>Termék Backlog</h3>
				<h3>Sprint Backlog</h3>
			</div>

		</li>
	</ul>
	
	<ul class="gomb">
		
		<li><img on:click={szinvalaszto} src="icons/gear.png" alt="gear" /></li>
		<li>
			<div class="paletta">
				<img src="Színek/caribbean.png" >
				<img src="Színek/cottonCandy.png" >
				<img src="Színek/grass.png" >
				<img src="Színek/navy.png" >
				<img src="Színek/oceanNight.png" >
				<img src="Színek/original.png" >
				<img src="Színek/pine.png" >
				<img src="Színek/pink.png" >
				<img src="Színek/redWine.png" >
				<img src="Színek/rose.png" >
			</div>
		</li>
	</ul>
	
	
</main>

<style>
	
    .gomb{
        position: relative;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-content: space-between;
    }
	.gomb img {
		width: 40px;
		height: 40px;
		margin-top: 5px;
	}
	main {
		z-index: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		padding-right: 15px;
		padding-left: 15px;
		
	}
	.lenyilo{
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content:center ;	
		width: 150px;
		padding-right: 20px;
		padding-left: 20px;
		background-color: #e2e2e2;
		position: fixed;
		z-index: 1;
		
	}

	.modellek{
		position: relative;
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		width: 1000px;
		z-index: 0;
	}
	.alap{
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items:center ;
		background-color: #e2e2e2;
		border-radius: 20px;
		width:150px;
		height: 40px;
		padding-right: 20px;
		padding-left: 20px;
		z-index: 0;
	}
	ul{
		list-style: none;
	}


	li img{
		width:25px;

	}
    .paletta img{
        z-index: 1;
    }
	.paletta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: center;
		padding: 10px;
		align-items: center;
		position: fixed;
		background-color: #e2e2e2;
		border-radius: 20px;
		z-index: 1;
		
	}

</style>

<script lang="ts">
    import { onMount } from 'svelte';

	let alap_s: any;
	let alap_v: any;
	let alap_r: any;
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
            paletta.style.cssText='display: flex; align-content: space-evenly;'

			
        }
        else if(kapcsolas_g==true){
            
			paletta.style.display = 'none';
        }

        kapcsolas_g=!kapcsolas_g;
    }

	onMount(() => {
		paletta = document.querySelector('.paletta');
		lenyilas_r =document.querySelector('.lenyilo-r')
		lenyilas_v =document.querySelector('.lenyilo-v')
		lenyilas_s =document.querySelector('.lenyilo-s')
		alap_s=document.querySelector('.alap_s')
		alap_v=document.querySelector('.alap_v')
		alap_r=document.querySelector('.alap_r')
		paletta.style.display='none';
		lenyilas_r.style.display='none';
		lenyilas_v.style.display='none';
		lenyilas_s.style.display='none';
    });

	function lenyit_r(){
		if (kapcsolas_r == true) {
            lenyilas_r.style.display = 'none';
			alap_r.style.cssText=' border-radius: 20px ';
        }
        else if(kapcsolas_r==false){
            lenyilas_r.style.cssText = 'display: flex; border-radius: 0px 0px 20px 20px';
			alap_r.style.cssText=' border-radius: 20px 20px 0px 0px';
        }

        kapcsolas_r=!kapcsolas_r;
	}


	function lenyit_v(){
		if (kapcsolas_v == true) {
            lenyilas_v.style.display = 'none';
			alap_v.style.cssText=' border-radius: 20px ';
        }
        else if(kapcsolas_v==false){
            lenyilas_v.style.cssText = 'display: flex; border-radius: 0px 0px 20px 20px';
			alap_v.style.cssText=' border-radius: 20px 20px 0px 0px';
        }

        kapcsolas_v=!kapcsolas_v;
	}


	function lenyit_s(){
		if (kapcsolas_s == true) {
            lenyilas_s.style.display = 'none';
			alap_s.style.cssText=' border-radius: 20px ';
        }
        else if(kapcsolas_s==false){
            lenyilas_s.style.cssText = 'display: flex; border-radius: 0px 0px 20px 20px';
			alap_s.style.cssText=' border-radius: 20px 20px 0px 0px';
        }

        kapcsolas_s=!kapcsolas_s;
	}


	
</script>
