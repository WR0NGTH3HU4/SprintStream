<main>
    
    <div class="cim">
        <h1>SprintStream</h1>
    </div>
    <div class="modellek">
        <h3>Scrum</h3>
        <img src="icons/downarrow.png" alt="down_arrow">
    </div>
    <div class="modellek">
        <h3>Vízesés</h3>
        <img src="icons/downarrow.png" alt="down_arrow">
    </div>
    <div class="modellek">
        <h3>Rólunk</h3>
        <img src="icons/downarrow.png" alt="down_arrow">
    </div>
    <div class="gomb">
        <img onclick="szinvalaszto()" src="icons/gear.png" alt="gear">
        <div>
            <!--Ide kerül majd a színpaletta-->
            <img src="">


        </div>
    </div>
</main>
<style>
    .gomb img{
        width: 40px;
        height: 40px;
    }
    main{
        
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        padding-right: 15px;
        padding-left: 15px;
    }
    .modellek{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        background-color: #E2E2E2;
        padding: 10px;
        height: 2rem;
        width:9rem;
        border-radius: 20px;
    }
    .modellek img{  
        width: 20px;
    }
</style>
<script>

    let kapcsolas= false;
    function szinvalaszto(){
        if(kapcsolas== false){

        }
    }
</script>