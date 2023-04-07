<main>
    <div class="egesz">
    <Navbar></Navbar>
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
        width:fit-content;
        height: 70rem;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        position:relative;
        
    }
    .kor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        flex-wrap: wrap;
        position: absolute;
        transform: translate(20rem);
    }
    .kor1{
        
        background-color:#BFD7FF ;
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        z-index: 4;
    }
    .kor2{
        background-color:#788BFF ;
        width: 18rem;
        height: 18rem;
        border-radius: 100%;
        transform: translate( 33rem,-9rem);
        z-index: 5;
    }
    .kor3{
        
        background-color:#9BB1FF ;
        width: 22rem;
        height: 22rem;
        border-radius: 100%;
        transform: translate( 33rem,5rem);
        z-index: 3;
    }
    .kor4{
        background-color:#E3E3E3 ;
        width: 15rem;
        height: 15rem;
        border-radius: 100%;
        
        transform: translate(53rem,2rem);
        z-index: 2;
    }
    .kor5{
        background-color:#BFD7FF ;
        width: 22rem;
        height: 22rem;
        border-radius: 100%;
        
        transform: translate(62rem,-9rem);
        z-index: 2;
    }
    .kor6{
        background-color:#788BFF ;
        width: 25rem;
        height: 25rem;
        border-radius: 100%;
        
        transform: translate(60rem,10rem);
        z-index: 1;
    }
    .kor7{
        background-color:#BFD7FF ;
        width: 15rem;
        height: 15rem;
        border-radius: 100%;
        transform: translate(48rem,18rem);
        z-index: 0;
    }

</style>

<script lang="ts">
	import Navbar from "../../components/Navbar.svelte";


</script>
