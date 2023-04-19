<main>
    <div id="quiz">
        {#each kerdesek as kerdes_szovege, i}
            <div class="card">
                <img class="felso" src="../wave_top.svg" alt="wave_top">
                <div id="{i}" class="tartalom">
                    <div class="kerdes">
                        <h1>{kerdes_szovege.kerdes_szovege}</h1>
                        <div class="valasz">
                            <p>{kerdes_szovege.a_valasz}</p>
                            <p>{kerdes_szovege.b_valasz}</p>
                            <p>{kerdes_szovege.c_valasz}</p>
                        </div>
                    </div>
                    <ul>
                        <button on:click={() => kovi_kerdes(i, "a")}>A</button>
                        <button on:click={() => kovi_kerdes(i, "b")}>B</button>
                        <button on:click={() => kovi_kerdes(i, "c")}>C</button>
                    </ul>
                </div>
                <svg class="hulamok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#788BFF" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,224C384,213,480,139,576,122.7C672,107,768,149,864,186.7C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>    
                    <path fill="#5465FF" fill-opacity="1" d="M0,288L48,245.3C96,203,192,117,288,106.7C384,96,480,160,576,208C672,256,768,288,864,266.7C960,245,1056,171,1152,165.3C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        {/each}

        <div id="{kerdesek.length}" class="vege card">
            <img class="felso" src="../wave_top.svg" alt="wave_top">
            <div id="ertekeles">
                <h1>Végeztél a kérdésekkel.</h1>
                <p>A jól megválaszolt kérdések száma: {jok}</p>
                <button id="fel" on:click={tetejere}>🢁</button>
            </div>
            <img class="also" src="../wave_bottom.svg" alt="wave_bottom">
        </div>
    </div>
</main>

<style lang="scss">
    main{
        display: flex;
        flex-direction: column;
    }

    .card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin: 0px;
        padding: 0px;
        width: 100vw;
        height: 100vh;

        font-size: 32px;
    }

    .tartalom{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        
        & > ul{
            list-style: none;
            padding: 0%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            & > button{
                padding: 20px;
                margin: 5%;
                background-color: #9BB1FF;
                border-radius: 15px;
                width: 200%;
                font-size: 32px;
                border: 0px;
            }
        }

        & > .kerdes{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    #quiz > .card:nth-child(odd) {
        background-color: #E2E2E2;
    }

    #quiz > .card:nth-child(even) {
        background-color: #5465FF;
        color: #E2E2E2;
        & > svg{
            visibility: hidden;
        }
    }
    
    #quiz > .vege:nth-child(odd){
        background-color: #E2E2E2;
    }

    #quiz > .vege:nth-child(even) {
        background-color: #5465FF;
        & > svg{
            visibility: hidden;
        }
    }

    #fel{
        font-size: 50px;
        padding: 20px;
        background-color: #9BB1FF;
        border-radius: 15px;
        border: 0px;
        color: #E2E2E2;
    }
</style>

<script lang="ts">
	import { each, element } from "svelte/internal";

    const kerdesek = [
        // válasz lehetőségek a,b,c
        {
            kerdes_szovege: "Mi a scrum?",
            a_valasz: "A) egy sajtfajta",
            b_valasz: "B) egy projekt megvalósítási keretrendszer",
            c_valasz: "C) egy francia ételkülönlegesség",
            valasz: "b"
        },
        {
            kerdes_szovege: "2",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
        {
            kerdes_szovege: "3",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
        {
            kerdes_szovege: "4",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
        {
            kerdes_szovege: "5",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
        {
            kerdes_szovege: "6",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
        {
            kerdes_szovege: "7",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
        {
            kerdes_szovege: "8",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
        {
            kerdes_szovege: "9",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
        {
            kerdes_szovege: "10",
            a_valasz: "a",
            b_valasz: "b",
            c_valasz: "c",
            valasz: "a"
        },
    ];

    let jok = 0;

    function kovi_kerdes(jelenlegi_index : number, valasz : string) {
        let uj_index = jelenlegi_index +1;
        document.getElementById(uj_index)?.scrollIntoView({behavior: 'smooth', block: 'center'})

        if (kerdesek[jelenlegi_index].valasz == valasz) jok++;
   
    }

    function tetejere(){
        window.scrollTo({behavior: 'smooth', top:0});
    }
</script>
