<main>
    <div class="egesz">
        <Navbar></Navbar>
        <div class="body">
            <div class="fejlec">
                <img src="scrum.png" alt="scrum kép">
                <p>Scrum</p>
            </div>
            <div class="lepesvalaszto">
                <div class="gomb1 gomb">
                    <p>1.lépés</p>
                </div>
                <div class=" gomb2 gomb">
                    <p>2.lépés</p>
                </div>
                <div class=" gomb3 gomb">
                    <p>3.lépés</p>
                </div>
                <div class=" gomb4 gomb">
                    <p>4.lépés</p>
                </div>
                <div class=" gomb5 gomb">
                    <p>5.lépés</p>
                </div>
                <div class=" gomb6 gomb">
                    <p>6.lépés</p>
                </div>
                <div class=" gomb7 gomb">
                    <p>7.lépés</p>
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    
    main{
        background-color:#5465FF ;
        
    }
    .fejlec{
        background-color: #5465FF;
        height: 400px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        
    }
    .fejlec img {
        width: 300px;
        height: 300px;
        background-color: red;//a kép helyének meghatározására 
        border-radius: 6%;
    }
    .fejlec p {
        font-size: 100px;
    }
    .lepesvalaszto{
        background-color: #5465FF;
        height: 80vh;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-left: 150px;
        margin-right: 150px;
        align-items: center;
    }
    .gomb{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        flex-wrap: wrap;
        position: absolute;
        transform: translate(20rem);
    }
    .gomb1{
        background: #9BB1FF;
        border-radius: 20px;
        z-index: 0;
        width: 20rem;
        height: 15rem;
        transform: translate(17rem, -12rem);
    }
    .gomb2{
        background: #BFD7FF;
        border-radius: 20px;
        width: 30rem;
        height: 15rem;
        transform: translate(27rem , 0rem);
        position: relative;
        z-index: 1;
    }
    .gomb3{
        background: #788BFF;
        border-radius: 20px;
        
        width: 60rem;
        height: 20rem;
        transform: translate(22rem , 13rem);
        position: relative;
        z-index: 0;
    }
    .gomb4{
        background: #9BB1FF;
        border-radius: 20px;
        width: 35rem;
        height: 22rem;
        transform: translate(10rem, -2rem);
        position: relative;
        z-index: 1;
    }
    .gomb5{
        background: #788BFF;
        border-radius: 20px;
        width: 60rem;
        height: 15rem;
        transform: translate(4rem,-14rem);
        position: relative;
        z-index: 0;
    }
    .gomb6{
        background: #9BB1FF;
        border-radius: 20px;
        width: 60rem;
        height: 23rem;
        transform: translate(-2rem , 2rem);
        position: relative;
        z-index: 0;
    }
    .gomb7{
        background: #BFD7FF;
        border-radius: 20px;
        width: 80rem;
        height: 15rem;
        transform: translate(-28rem , 13rem);
        position: relative;
        z-index: 0;
    }

    .gomb p {
        font-size: 48px;
    }
    .gomb:hover{
        border: 3px solid #000000;
    }
</style>

<script lang="ts">
	import Navbar from "../../components/Navbar.svelte";


</script>
