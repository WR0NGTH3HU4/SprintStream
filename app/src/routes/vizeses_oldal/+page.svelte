<main>
    <div class="egesz">
    <Navbar></Navbar>
        <div class= "cim">
            <img src="icons/waterfall-chart.png">
            <h1>Vizeses</h1>
        </div>
        <div class="main">
            <div class="kor kor1">
                <h3>1.lépés</h3>
            </div>
            <div class="kor kor2">
                <h3>2.lépés</h3>
            </div>
            <div class="kor kor3">
                <h3>3.lépés</h3>
            </div>
            <div class="kor kor4">
                <h3>4.lépés</h3>
            </div>
            <div class="kor kor5">
                <h3>5.lépés</h3>
            </div>            
            <div class="kor kor6">
                <h3>6.lépés</h3>
            </div>            
            <div class="kor kor7">
                <h3>7.lépés</h3>
            </div>

        </div>
    </div>
</main>

<style lang="scss">
    .egesz{
        background-color:#5465FF ;
    }
    .main{
        width: 100%;
        height: 70rem;
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        position:relative;
        
    }
    .cim{
        display: flex;
        flex-direction: row;
        justify-content:space-evenly ;
        align-items: center;
        padding: 20%;
    }
    .cim h1{
        font-size: 15rem;
    }
    .kor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        flex-wrap: wrap;
        position: absolute; 
        border-radius: 100%;
        text-align: center;
    }
    .kor1{
        
        background-color:#BFD7FF ;
        width: 20rem;
        height: 20rem;
        top:5%;
        right: 67%;
        z-index: 4;
        
    }
    .kor2{
        background-color:#788BFF ;
        width: 18rem;
        height: 18rem;
        top:-3%;
        right: 52%;
        z-index: 5;
    }
    .kor3{
        
        background-color:#9BB1FF ;
        width: 22rem;
        height: 22rem;
        top:18%;
        right: 47%;
        z-index: 3;
    }
    .kor4{
        background-color:#E3E3E3 ;
        width: 15rem;
        height: 15rem;
        top:18%;
        right: 34%;
        
        
        z-index: 2;
    }
    .kor5{
        background-color:#BFD7FF ;
        width: 22rem;
        height: 22rem;
        top:3%;
        right: 12%;
        
        z-index: 2;
    }
    .kor6{
        background-color:#788BFF ;
        width: 25rem;
        height: 25rem;
        top:25%;
        right: 12%;
        
        z-index: 1;
    }
    .kor7{
        background-color:#BFD7FF ;
        width: 15rem;
        height: 15rem;
        top:43%;
        right: 40%;
        
        z-index: 0;
    }

</style>

<script lang="ts">
	import Navbar from "../../components/Navbar.svelte";


</script>
