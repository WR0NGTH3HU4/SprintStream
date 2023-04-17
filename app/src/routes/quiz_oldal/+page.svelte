<main>
    <div id="elso" class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('masodik')}>ign</li>
                <li on:click={() => kovi_kerdes('masodik')}>nem</li>
                <li on:click={() => kovi_kerdes('masodik')}>néha</li>
            
            </ul>
        </div>
        <img src="wave_bottom.svg" alt="wave_bottom">
    </div>

    {#each kerdesek as kerdes, i}
        <div id="{i + 1}" class="kerdes">
            {kerdes.kerdes} {i}
            <ul>
                <li on:click={() => kovi_kerdes(i, "ign")}>ign</li>
                <li on:click={() => kovi_kerdes(i, "nem")}>nem</li>
                <li on:click={() => kovi_kerdes(i, "néha")}>néha</li>
            </ul>  
        </div>
    {/each}

    <!--
    <div id="masodik" class="card kek">
        
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('harmadik')}>ign</li>
                <li on:click={() => kovi_kerdes('harmadik')}>nem</li>
                <li on:click={() => kovi_kerdes('harmadik')}>néha</li>
            </ul>
        </div>
    </div>

    <div id="harmadik" class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('negyedik')}>ign</li>
                <li on:click={() => kovi_kerdes('negyedik')}>nem</li>
                <li on:click={() => kovi_kerdes('negyedik')}>néha</li>
            </ul>         
        </div>
        
        <img src="wave_bottom.svg" alt="wave_bottom">
    </div>
    
    <div id="negyedik" class="card kek">
        
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('otodik')}>ign</li>
                <li on:click={() => kovi_kerdes('otodik')}>nem</li>
                <li on:click={() => kovi_kerdes('otodik')}>néha</li>
            </ul>
        </div>
    </div>

    <div id="otodik" class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('hatodik')}>ign</li>
                <li on:click={() => kovi_kerdes('hatodik')}>nem</li>
                <li on:click={() => kovi_kerdes('hatodik')}>néha</li>
            </ul>         
        </div>
        
        <img src="wave_bottom.svg" alt="wave_bottom">
    </div>
    
    <div id="hatodik" class="card kek">
        
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('hetedik')}>ign</li>
                <li on:click={() => kovi_kerdes('hetedik')}>nem</li>
                <li on:click={() => kovi_kerdes('hetedik')}>néha</li>
            </ul>
        </div>
    </div>

    <div id="hetedik" class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('nyolcadik')}>ign</li>
                <li on:click={() => kovi_kerdes('nyolcadik')}>nem</li>
                <li on:click={() => kovi_kerdes('nyolcadik')}>néha</li>
            </ul>         
        </div>
        
        <img src="wave_bottom.svg" alt="wave_bottom">
    </div>
    
    <div id="nyolcadik" class="card kek">
        
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('kilencedik')}>ign</li>
                <li on:click={() => kovi_kerdes('kilencedik')}>nem</li>
                <li on:click={() => kovi_kerdes('kilencedik')}>néha</li>
            </ul>
        </div>
    </div>

    <div id="kilencedik" class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li on:click={() => kovi_kerdes('tizedik')}>ign</li>
                <li on:click={() => kovi_kerdes('tizedik')}>nem</li>
                <li on:click={() => kovi_kerdes('tizedik')}>néha</li>
            </ul>         
        </div>
        
        <img src="wave_bottom.svg" alt="wave_bottom">
    </div>
    
    <div id="tizedik" class="card kek">
        
        <div class="kerdes">
            <p>Szereted a sajtot?</p>
            <ul>
                <li>ign</li>
                <li>nem</li>
                <li>néha</li>
            </ul>
        </div>
    </div>
    -->
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
    const kerdesek = [
        {
            kerdes: "áű",
            valasz: "ign"
        },
        {
            kerdes: "asd23trwevf",
            valasz: "nem"
        },
        {
            kerdes: "asd23trwevf",
            valasz: "nem"
        },
        {
            kerdes: "asd23trwevf",
            valasz: "nem"
        },
        {
            kerdes: "asd23trwevf",
            valasz: "nem"
        },
        {
            kerdes: "asd23trwevf",
            valasz: "nem"
        },
        {
            kerdes: "asd23trwevf",
            valasz: "nem"
        },
        {
            kerdes: "asd23trwevf",
            valasz: "nem"
        },
    ];

    let jok = 0;

    function kovi_kerdes(jelenlegi_index, valasz) {
        document.getElementById(++jelenlegi_index).scrollIntoView({ behavior: 'smooth', block: 'center' });

        if (kerdesek[jelenlegi_index].valasz == valasz) jok++;
        alert(jok);
    }

    


</script>
