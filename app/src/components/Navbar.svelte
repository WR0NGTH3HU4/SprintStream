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
	<NavbarCombo name="Vízesés">
		<a href="vizeses_oldal">Modell</a>
		<a href="quiz_oldal">Quiz</a>
	</NavbarCombo>
	<a href="rolunk">Rólunk</a>

	<NavbarCombo name={'<span class="material-symbols-rounded">settings</span>'} noarrow>
		<ThemeBubble theme="default" />
		<ThemeBubble theme="caribbean" />
		<ThemeBubble theme="cottoncandy" />
		<ThemeBubble theme="grass" />
		<ThemeBubble theme="navy" />
		<ThemeBubble theme="oceannight" />
		<ThemeBubble theme="pine" />
		<ThemeBubble theme="pink" />
		<ThemeBubble theme="redwine" />
		<ThemeBubble theme="rose" />
	</NavbarCombo>
</nav>

<style lang="scss">
	@use '../scss/nav.scss';

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

		& > a, & > a:active, & > a:link, & > a:hover {
			@extend .nav_link;
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
