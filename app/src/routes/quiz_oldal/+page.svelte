<main>
    <div id="elso" class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li ><button (click)="kovi_kerdes(`masodik`)>ign</button></li>
                <!--<li on:click={kovi_kerdes}>nem</li>
                <li on:click={kovi_kerdes}>néha</li>
            -->
            </ul>
        </div>
        <img src="wave_bottom.svg" alt="wave_bottom"></button>
    </div>

    <div id="masodik" class="card kek">
        
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <!--<li on:click={kovi_kerdes}>ign</li>
                <li on:click={kovi_kerdes}>nem</li>
                <li on:click={kovi_kerdes}>néha</li>
            -->
            </ul>
        </div>
        
    </div>

    <div id="harmadik" class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <!--<li on:click={kovi_kerdes}>ign</li>
                <li on:click={kovi_kerdes}>nem</li>
                <li on:click={kovi_kerdes}>néha</li>
            -->
            </ul>         
        </div>
        
        <img src="wave_bottom.svg" alt="wave_bottom">
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
    }

    .card img{
        width: 100vw;
        height: auto;
    }

    .card{
        margin: 0px;
        padding: 0px;
        width: 100vw;
        height: 100vh;
    }

    .platina{
        background-color: #E2E2E2;
    }

    .kek{
        background-color: #5465FF;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .kerdes{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .kerdes ul{
        list-style: none;
        padding: 0%;
    }

</style>

<script lang="ts">
    function kovi_kerdes(hanyadik:string) : void{
        //window.scroll(0, window.scrollY + document.querySelector(`#${hanyadik}`).getBoundingClientRect().top);
        const elem = document.querySelector(hanyadik)!;
        const y = elem.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({top: y,behavior: 'smooth'});
    }



</script>
