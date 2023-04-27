<main>
    <div class="egesz">
        <Navbar></Navbar>
        <div class="body">
            <div class="fejlec">
                <img src="icons/scrum.png" alt="scrum kép">
                <p>Scrum</p>
            </div>
            <div class="lepesvalaszto">
                <div class="gomb1 gomb btn">
                    <p>1.lépés</p>
                </div>
                <div class=" gomb2 gomb btn">
                    <p>2.lépés</p>
                </div>
                <div class=" gomb3 gomb btn">
                    <p>3.lépés</p>
                </div>
                <div class=" gomb4 gomb btn">
                    <p>4.lépés</p>
                </div>
                <div class=" gomb5 gomb btn">
                    <p>5.lépés</p>
                </div>
                <div class=" gomb6 gomb btn">
                    <p>6.lépés</p>
                </div>
                <div class=" gomb7 gomb btn">
                    <p>7.lépés</p>
                </div>
            </div>
            <div class="container">
                <div class="indicator">
                    <spam class="btn active btn2"></spam>
                    <spam class="btn btn2"></spam>
                    <spam class="btn btn2"></spam>
                    <spam class="btn btn2"></spam>
                    <spam class="btn btn2"></spam>
                    <spam class="btn btn2"></spam>
                    <spam class="btn btn2"></spam>

                </div>
                <div class="testimonial">
                    <div class="slide-row" id="slide">
                        <div class="slide-col">
                            <div class="lepes-text">
                                <h3>1. lépés</h3>
                                <p>ide kell a szöveg</p> 
                            </div>
                            <div class="lepes-img">
                                <img src="" alt="kép">
                            </div>
                        </div>  
                        <div class="slide-col">
                            <div class="lepes-text">
                                <h3>2. lépés</h3>
                                <p>ide kell a szöveg</p> 
                            </div>
                            <div class="lepes-kep">
                                <img src="" alt="kép">
                            </div>
                        </div>
                        <div class="slide-col">
                            <div class="lepes-text">
                                <h3>3. lépés</h3>
                                <p>ide kell a szöveg</p> 
                            </div>
                            <div class="lepes-kep">
                                <img src="" alt="kép">
                            </div>
                        </div>
                        <div class="slide-col">
                            <div class="lepes-text">
                                <h3>4. lépés</h3>
                                <p>ide kell a szöveg</p> 
                            </div>
                            <div class="lepes-kep">
                                <img src="" alt="kép">
                            </div>
                        </div>
                        <div class="slide-col">
                            <div class="lepes-text">
                                <h3>5. lépés</h3>
                                <p>ide kell a szöveg</p> 
                            </div>
                            <div class="lepes-kep">
                                <img src="" alt="kép">
                            </div>
                        </div>
                        <div class="slide-col">
                            <div class="lepes-text">
                                <h3>6. lépés</h3>
                                <p>ide kell a szöveg</p> 
                            </div>
                            <div class="lepes-kep">
                                <img src="" alt="kép">
                            </div>
                        </div>
                        <div class="slide-col">
                            <div class="lepes-text">
                                <h3>7. lépés</h3>
                                <p>ide kell a szöveg</p> 
                            </div>
                            <div class="lepes-kep">
                                <img src="" alt="kép">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>  
</main>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    
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
        margin-left: 10%;
        margin-right: 10%;
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
        width: 18%;
        height: 20%;
        transform: translate(40%, -85%);
    }
    .gomb2{
        background: #BFD7FF;
        border-radius: 20px;
        width: 20%;
        height: 25%;
        transform: translate(55% , 10%);
        
        z-index: 17;
    }
    .gomb3{
        background: #788BFF;
        border-radius: 20px;
        
        width:25%;
        height: 30%;
        transform: translate(35% , 70%);
        
        z-index: 0;
    }
    .gomb4{
        background: #9BB1FF;
        border-radius: 20px;
        width: 23%;
        height: 30%;
        transform: translate(125%, 5%);
        
        z-index: 6;
    }
    .gomb5{
        background: #788BFF;
        border-radius: 20px;
        width: 34%;
        height: 20%;
        transform: translate(77%,-100%);
        
        z-index: 0;
    }
    .gomb6{
        background: #788BFF;
        border-radius: 20px;
        width: 25%;
        height: 30%;
        transform: translate(158% , 75%);
        
        z-index: 0;
    }
    .gomb7{
        background: #BFD7FF;
        border-radius: 20px;
        width: 20%;
        height: 28%;
        transform: translate(250% , -30%);
        
        z-index: 0;
    }

    .gomb p {
        font-size: 250%;
    }
    .gomb:hover{
        border: 3px solid #000000;
    }




    .slide-row{
        display: flex;
        width: 5600px;
        transition: 0.5s;
    }
    .slide-col{
        width: 800px;
        height: 400px;
        position: relative;
    }

    .lepes-img{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
    }
    .lepes-img img{
        height: 100%;
        border-radius: 20px;
    }
    .lepes-text{
        background-color: #9BB1FF;
        width: 520px;
        height: 270px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius:20px ;
        padding: 45px;
        color: #d3d3d3;
        box-sizing: border-box;
        z-index: 2;
    }
    .lepes-text p {
        font-size: 18px;
        line-height: 24px;
    }
    .lepes-text h3{
        margin: 35px 0 5px;
        color: #fff;
    }
    .container{
        width: 800px;
        height: 400px;
        position: absolute;
        top: 200%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .indicator{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        z-index: 100;
    }
    .btn2{
        display: inline-block;
        height: 15px;
        width: 15px;
        margin: 4px;
        border-radius: 15px;
        transition: 0.5s;
        cursor: pointer;
        background: #000000;
    }
    
    .active{
        width: 45px;
    }
    .testimonial{
        width: 100%;
        height:100% ;
        overflow: hidden;
    }
</style>

<script lang="ts">
	//import { slide } from "svelte/types/runtime/transition";
	import Navbar from "../../components/Navbar.svelte";
    import { onMount } from 'svelte';
    
        onMount(() => {
            let i ;
            var btn: any = document.getElementsByClassName("btn");
            var slide = document.getElementById("slide");

            btn[0].onclick = function(){
                slide.style.transform= "translateX(0px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                    if(i == 7){
                        btn[i].classList.add("active");    
                    }
                }
            }
            btn[1].onclick = function(){
                slide.style.transform= "translateX(-800px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                    if(i == 8){
                        btn[i].classList.add("active");    
                    }
                }
            }
            btn[2].onclick = function(){
                slide.style.transform= "translateX(-1600px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                    if(i == 9){
                        btn[i].classList.add("active");    
                    }
                }
            }
            btn[3].onclick = function(){
                slide.style.transform= "translateX(-2400px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                    if(i == 10){
                        btn[i].classList.add("active");    
                    }
                }
            }
            btn[4].onclick = function(){
                slide.style.transform= "translateX(-3200px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                    if(i == 11){
                        btn[i].classList.add("active");    
                    }
                }
            }
            btn[5].onclick = function(){
                slide.style.transform= "translateX(-4000px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                    if(i == 12){
                        btn[i].classList.add("active");    
                    }
                }
            }
            btn[6].onclick = function(){
                slide.style.transform= "translateX(-4800px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                    if(i == 13){
                        btn[i].classList.add("active");    
                    }
                }
                
            }
            btn[7].onclick = function(){
                slide.style.transform= "translateX(0px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                } 
                this.classList.add("active");
            }
            btn[8].onclick = function(){
                slide.style.transform= "translateX(-800px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                } 
                this.classList.add("active");
            }
            btn[9].onclick = function(){
                slide.style.transform= "translateX(-1600px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                } 
                this.classList.add("active");
            }
            btn[10].onclick = function(){
                slide.style.transform= "translateX(-2400px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                } 
                this.classList.add("active");
            }
            btn[11].onclick = function(){
                slide.style.transform= "translateX(-3200px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                } 
                this.classList.add("active");
            }
            btn[12].onclick = function(){
                slide.style.transform= "translateX(-4000px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                } 
                this.classList.add("active");
            }
            btn[13].onclick = function(){
                slide.style.transform= "translateX(-4800px)";
                for(i=7;i<14;i++){
                    btn[i].classList.remove("active");
                } 
                this.classList.add("active");
            }
        });
    
</script>
