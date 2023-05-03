<nav>
	<span class="cim">SprintStream</span>
	<NavbarCombo name="Scrum" options={[{name: "Modell"}, {name: "Quiz"}]} />
	<NavbarCombo name="Vizeses" options={[{name: "Modell"}, {name: "Quiz"}]} />
	<span class="material-symbols-rounded" on:click={szinvalaszto}>
		settings
	</span>
	<!--
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
	-->
</nav>

<style lang="scss">
	
	nav {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-end;
		
		align-items: flex-start;
		padding-right: 15px;
		padding-left: 15px;
		max-height: 40px;
		color: white;
		padding: 1rem;
		gap: 1rem;
	}

	nav > * {
		cursor: pointer;
	}

	.cim {
		font-size: 1.3rem;
		justify-self: flex-start;
		margin-right: auto;
		font-weight: 600;
	}

	img {
		height: 2rem;
	}

</style>

<script lang="ts">
    import { onMount } from 'svelte';
	import NavbarCombo from './NavbarCombo.svelte';

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
