<main>
    <div class="nav">
        <Navbar></Navbar>
    </div>
    <div class="body">
        <div class="fejlec">
            <img src="scrum.png" alt="scrum kép">
            <p>Scrum</p>
        </div>
        <div class="lepesvalaszto">
            <div class="gomb0 gomb">
                <p>1</p>
            </div>
            <div class=" gomb1 gomb">
                <p>2</p>
            </div>
            <div class=" gomb2 gomb">
                <p>3</p>
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
    }
    .fejlec p {
        font-size: 100px;
    }
    .lepesvalaszto{
        background-color: #5465FF;
        height: 500px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-left: 100px;
        margin-right: 100px;
        align-items: center;
    }
    .gomb0{
        background: #9BB1FF;
        border-radius: 20px;
        margin: 20px;
        width: 200px;
        height: 200px;
    }
    .gomb1{
        background: #BFD7FF;
        border-radius: 20px;
        margin: 20px;
        width: 200px;
        height: 200px;
    }
    .gomb2{
        background: #788BFF;
        border-radius: 20px;
        margin: 20px;
        width: 200px;
        height: 200px;
    }
    .gomb p{
        text-align: center;
        margin-top: 80px;
        font-size: 40px;  
    }
    .gomb:hover{
        border: 3px solid #000000;
    }
</style>

<script lang="ts">
	import Navbar from "../../components/Navbar.svelte";


</script>
