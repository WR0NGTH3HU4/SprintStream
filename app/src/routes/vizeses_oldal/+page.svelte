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
        </div>
    </div>
</main>

<style lang="scss">
    .egesz{
        background-color:#5465FF ;
    }
    .main{
        height: 50rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .kor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        flex-wrap: wrap;
        position: relative;
    }
    .kor1{

        background-color:#BFD7FF ;
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        z-index: 2;
    }
    .kor2{
        background-color:#788BFF ;
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        position: relative;
        transform: translate( -6rem,-10rem);
        z-index: 3;
    }
    .kor3{
        
        background-color:#9BB1FF ;
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        position: relative;
        transform: translate( -24rem,6rem);
        z-index: 1;
    }
    .kor4{
        background-color:#E3E3E3 ;
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        position: relative;
        transform: translate(-28rem,2rem);
        z-index: 0;
    }
    .kor5{
        background-color:#BFD7FF ;
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        position: relative;
        transform: translate(-35rem,-1rem);
        z-index: 1;
    }
    .kor6{
        background-color:#BFD7FF ;
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        position: relative;
        transform: translate(-35rem,-1rem);
        z-index: 1;
    }
</style>

<script lang="ts">
	import Navbar from "../../components/Navbar.svelte";


</script>
