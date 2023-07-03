<main>
    <div id="quiz">
        {#await kerdesekPromise}
            loding van tes
        {:then kerdesek}
            <div class="vege card">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
                    <path fill="var(--1)" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,202.7C672,171,768,117,864,117.3C960,117,1056,171,1152,208C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    <path fill="var(--0)" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,277.3C672,309,768,299,864,266.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <div id="kezdes">
                    <div>
                        <h2>Köszöntelek a kvíz oldalon</h2>
                        <p>Teszteld a tudásod!</p>
                    </div>
                    <button class="btn" on:click={() => kezdes()}>Kezdjünk bele</button>
                </div>
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="var(--1)" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,224C384,213,480,139,576,122.7C672,107,768,149,864,186.7C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>    
                    <path fill="var(--0)" fill-opacity="1" d="M0,288L48,245.3C96,203,192,117,288,106.7C384,96,480,160,576,208C672,256,768,288,864,266.7C960,245,1056,171,1152,165.3C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        
            {#each kerdesek as kerdes, i}
                <div class="card">
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
                        <path fill="var(--1)" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,202.7C672,171,768,117,864,117.3C960,117,1056,171,1152,208C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                        <path fill="var(--0)" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,277.3C672,309,768,299,864,266.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <div id="{`${i}`}" class="tartalom">
                        <div class="kerdes">
                            <h2>Kérdés #{`${i+1}`}</h2>
                            <h4>{kerdes.kerdes}</h4>
                            <div class="valasz">
                                <div>
                                    {#if !!kerdes.a}<p>{kerdes.a} </p>{/if}
                                    {#if !!kerdes.b}<p>{kerdes.b} </p>{/if}
                                    {#if !!kerdes.c}<p>{kerdes.c} </p>{/if}
                                </div>
                                <div class="button">
                                    {#if !!kerdes.a}<button id="{`${i}_a`}" on:click={() => kovi_kerdes(kerdesek, i, "a")}>A</button>{/if}
                                    {#if !!kerdes.b}<button id="{`${i}_b`}" on:click={() => kovi_kerdes(kerdesek, i, "b")}>B</button>{/if}
                                    {#if !!kerdes.c}<button id="{`${i}_c`}" on:click={() => kovi_kerdes(kerdesek, i, "c")}>C</button>{/if}
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="var(--1)" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,224C384,213,480,139,576,122.7C672,107,768,149,864,186.7C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>    
                        <path fill="var(--0)" fill-opacity="1" d="M0,288L48,245.3C96,203,192,117,288,106.7C384,96,480,160,576,208C672,256,768,288,864,266.7C960,245,1056,171,1152,165.3C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            {/each}

            <div id="{`${kerdesek.length}`}" class="vege card">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
                    <path fill="var(--1)" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,202.7C672,171,768,117,864,117.3C960,117,1056,171,1152,208C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    <path fill="var(--0)" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,277.3C672,309,768,299,864,266.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <div id="ertekeles">
                    <div>
                        <h2>Végeztél a kérdésekkel.</h2>
                        <!-- <p>A jól megválaszolt kérdések száma: {jok}/{kerdesek_szama}</p> -->
                        <p>A helyes válaszokat zölddel a jelöli.</p>
                        <p>A helytelen válaszok jelöletlenek.</p>
                        {#if ellenorzott}
                            <p id="helyes"> Helyes válaszok (ellenőrzés után): {jok}</p>
                        {/if}
                        <button class="btn" on:click={ellenorzes}>Ellenőrzés</button>
                    </div>
                    
                    <button class="btn" on:click={tetejere}><!--🢁-->Újra</button>
                </div>
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="var(--1)" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,224C384,213,480,139,576,122.7C672,107,768,149,864,186.7C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>    
                    <path fill="var(--0)" fill-opacity="1" d="M0,288L48,245.3C96,203,192,117,288,106.7C384,96,480,160,576,208C672,256,768,288,864,266.7C960,245,1056,171,1152,165.3C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        {/await}
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
        max-width: 100%;
        height: 100vh;

        font-size: 32px;
    }

    button{
        cursor: pointer;
        font-family: 'Times New Roman', Times, serif;

        &:hover{
            transition-property: transform;
            transition-duration: .3s;
            transform: scale(.95);
        }
    }

    h2{
        margin: 0px;
    }

    .tartalom{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: end;
        padding: 0 80px;
        
        & > .kerdes{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    .valasz{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        & > :nth-child(1){
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        & > :nth-child(2){
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            color: var(--4);
            
            & > button{
                padding: 15px;
                margin: 5px;
                background-color: var(--2);
                
                border-radius: 15px;
                width: 100px;
                font-size: 32px;
                border: 0px;
            }
        }
    }

    #kezdes{
        padding: 0 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        > .btn{
            width: 500px;
            font-size: 40px;
            padding: 20px;
            background-color: var(--2);
            border-radius: 15px;
            border: 0px;
            color: var(--4);
            height: 110px;
        }
        > :nth-child(1){
            display: flex;
            flex-direction: column;
            align-items: center;
            > h2{
                margin: 0px;
            }
        }
    }

    #ertekeles{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 40px;

        
    }
    .btn{
            font-size: 50px;
            padding: 20px;
            background-color: var(--2);
            border-radius: 15px;
            border: 0px;
            color: var(--4);
            height: 110px;
        }

    #quiz > .card:nth-child(odd) {
        background-color: var(--4);
        color: black;
    }

    #quiz > .card:nth-child(even) {
        background-color: var(--0);
        color: var(--4);
        & > svg{
            visibility: hidden;
        }
    }
    
    #quiz > .vege:nth-child(odd){
        background-color: var(--4);
    }

    #quiz > .vege:nth-child(even) {
        background-color: var(--0);
        & > svg{
            visibility: hidden;
        }
    }

    @media (max-width: 650px){
        .tartalom{
            padding: 0 30px;
        }

        h2{
            font-size: 42px;
        }

        .valasz, .valasz > :nth-child(2) > button{
            font-size: 30px;
        }

        .valasz > :nth-child(2) > button{
            width: 50px;
        }

        .btn{
            font-size: 20px;
            padding: 10px;
            height: 50px;
        }

        #kezdes{
            justify-content: space-around;
            padding: 0 20px;
            > .btn{
                width: 200px;
                font-size: 25px;
                height: 90px;
            }
        }

        #ertekeles{
            padding: 20px;
            
            > :nth-child(1){
                > p{
                    font-size: 25px;
                }
            }
        }
    }

    @media (max-width: 400px){
        h2{
            font-size: 32px;
        }

        .valasz, .valasz > :nth-child(2) > button{
            font-size: 25px;
        }

        .valasz > :nth-child(2) > button{
            width: 50px;
        }

        #ertekeles{
            padding: 20px;
            
            > :nth-child(1){
                > h2{
                    font-size: 32px;
                }

                > p{
                    font-size: 25px;
                }
            }
        }
    }

</style>

<script lang="ts">
    import { each, element, noop } from "svelte/internal";
    import { QuestionManager } from "../../quiz/QuizManager";
    import { ToggleManager } from "../../util/ToggleManager";
    import { onMount } from "svelte";
    
    let qm: QuestionManager = new QuestionManager('scrum');
    let jok: number = 0;
    let kerdesek_szama = 10;
    let kerdesekPromise = qm.randomQuestions(kerdesek_szama);
    let toggles: ToggleManager[] = [];
    let ellenorzott = false;
    
    function toggleSzar(i: number, valasz: string) {
        let a: any = document.getElementById(`${i}_a`);
        let b: any = document.getElementById(`${i}_b`);
        let c: any = document.getElementById(`${i}_c`);

        a.style.backgroundColor = toggles[i].get('a') ? "#2b40ff" : "#9BB1FF";
        b.style.backgroundColor = toggles[i].get('b') ? "#2b40ff" : "#9BB1FF";
        c.style.backgroundColor = toggles[i].get('c') ? "#2b40ff" : "#9BB1FF";
    }

    function kovi_kerdes(kerdesek: any, jelenlegi_index: number, valasz: string) {
        let uj_index : number = jelenlegi_index +1;
        document.getElementById(`${uj_index}`)?.scrollIntoView({behavior: 'smooth', block: 'center'})

        toggles[jelenlegi_index].toggle(valasz);
        toggleSzar(jelenlegi_index, valasz);
        // if (kerdesek[jelenlegi_index].valasz == valasz) jok++;

    };

    function tetejere(){
        window.scrollTo({behavior: 'smooth', top:0});
        window.location.reload();
    };

	function kezdes(): any{
		document.getElementById(`${0}`)?.scrollIntoView({behavior: 'smooth', block: 'center'})
	}


    function ellenorzes(){
        kerdesekPromise.then(kerdesek => {
            for (let i = 0; i < kerdesek_szama; i++) {
                if (kerdesek[i].valasz == toggles[i].getToggled()) {
                    let helyes: any = document.getElementById(`${i}_${kerdesek[i].valasz}`);
                    helyes.style.backgroundColor = "green";
                    jok++;
                }
            }
        });
        ellenorzott = true;
    }

    //
    for (let i = 0; i < kerdesek_szama; i++) {
        toggles.push(new ToggleManager(["a", "b", "c"]));
    }

</script>