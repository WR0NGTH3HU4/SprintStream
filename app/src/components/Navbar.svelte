<script lang="ts">
	import { onMount } from 'svelte';
	import NavbarCombo from './NavbarCombo.svelte';
	import ThemeBubble from './ThemeBubble.svelte';
</script>

<nav>
	<span class="cim"><a href="/" class="noadeco">SprintStream</a></span>
	<NavbarCombo name="Scrum">
		<a href="scrum_oldal">Modell</a>
		<a href="quiz_oldal">Quiz</a>
	</NavbarCombo>
	<NavbarCombo name="Vizeses">
		<a href="vizeses_oldal">Modell</a>
		<a href="quiz_oldal">Quiz</a>
	</NavbarCombo>

	<NavbarCombo name={'<span class="material-symbols-rounded">settings</span>'} noarrow>
		<ThemeBubble theme="original" color="blue" />
		<ThemeBubble theme="caribbean" color="blue" />
		<ThemeBubble theme="cottonCandy" color="blue" />
		<ThemeBubble theme="grass" color="blue" />
		<ThemeBubble theme="navy" color="blue" />
		<ThemeBubble theme="oceanNight" color="blue" />
		<ThemeBubble theme="pine" color="blue" />
		<ThemeBubble theme="pink" color="blue" />
		<ThemeBubble theme="redwine" color="blue" />
		<ThemeBubble theme="rose" color="blue" />
	</NavbarCombo>
	<!-- TODO: slot for NavbarCombo -->
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
	:global(nav .options a) {
		color: black;
		text-decoration: none;
	}

	:global(nav .options img) {
		width: 2rem;
	}

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

		& > * {
			cursor: pointer;
		}
	}

	.cim {
		font-size: 1.3rem;
		justify-self: flex-start;
		margin-right: auto;
		font-weight: 600;

		a {
			color: white;
			text-decoration: none;
		}
	}

	img {
		height: 2rem;
	}
</style>
