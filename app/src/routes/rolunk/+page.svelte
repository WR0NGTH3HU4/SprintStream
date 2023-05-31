<main>
    <section class="main">
        <ClickerGenerator elemShape="square" shapes="{shapes}" />
    </section>
</main>

<style lang="scss">
    @import '../../scss/palette.scss';

    section {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    section:nth-child(odd) {
        background-color: $blue-0;
        color: white;
        padding: 1rem;
    }

    section:nth-child(even) {
        justify-content: space-between;

        & > div {
            padding: 1rem;
        }
    }
</style>

<script lang="ts">
	import ClickerGenerator from "../../components/ClickerGenerator.svelte";
	import Navbar from "../../components/Navbar.svelte";
    import { onMount } from 'svelte';
    
    const shapes = [
        {
            text: "asdasd",
        },
        {
            text: "asdasd"
        },
        {
            text: "asdasd"
        },
        {
            text: "asdasd"
        },
        {
            text: "asdasd"
        },
    ];

    const rolunk = [
        {
            nev: "Csóka András",
            leiras: "",
            kep: "",
            media: [
                {
                    tipus: "github",
                    link: ""
                }
            ],
        },
        {
            nev: "Császár András",
            leiras: "",
            kep: "",
            media: [
                {
                    tipus: "github",
                    link: ""
                }
            ],
        },
        {
            nev: "Kővágó Levente",
            leiras: "",
            kep: "",
            media: [
                {
                    tipus: "github",
                    link: ""
                }
            ],
        },
        {
            nev: "Kulimák Máté",
            leiras: "",
            kep: "",
            media: [
                {
                    tipus: "github",
                    link: ""
                }
            ],
        },
        {
            nev: "Tátrai Dominik Oszkár",
            leiras: "",
            kep: "",
            media: [
                {
                    tipus: "github",
                    link: ""
                }
            ],
        },
    ];
</script>
