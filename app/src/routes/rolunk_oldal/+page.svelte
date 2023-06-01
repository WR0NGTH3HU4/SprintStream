<main>
    <div class="egesz">
    <Navbar></Navbar>
<div class= "cim">
        <h1>Rólunk</h1>
    </div>
        <div class="main">
            <div on:click={elso} class="kor kor1">
                <h3>Csóka András</h3>
            </div>
            <div on:click={masodik} class="kor kor2">
                <h3>Császár András</h3>
            </div>
            <div on:click={harmadik} class="kor kor3">
                <h3>Kővágó Levente</h3>
            </div>
            <div on:click={negyedik} class="kor kor4">
                <h3>Kulimák Máté</h3>
            </div>
            <div on:click={otodik} class="kor kor5">
                <h3>Tátrai Dominik</h3>
            </div>            
        </div>
        <div class="tartalom">
            <svg class="elsohullam" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path  fill="#BFD7FF" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,181.3C384,181,480,235,576,229.3C672,224,768,160,864,154.7C960,149,1056,203,1152,234.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>   
            
            
                <path fill="#5465FF" fill-opacity="1" d="M0,192L26.7,186.7C53.3,181,107,171,160,170.7C213.3,171,267,181,320,202.7C373.3,224,427,256,480,261.3C533.3,267,587,245,640,218.7C693.3,192,747,160,800,138.7C853.3,117,907,107,960,117.3C1013.3,128,1067,160,1120,154.7C1173.3,149,1227,107,1280,90.7C1333.3,75,1387,85,1413,90.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>


            <div class="olvasas">
                <div class="szoveg">                  
                    <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="350" cy="350" r="350" fill="#292D32"/>
                    </svg>

                    <div>
                        <h1 class="jelenlegi_cim">{cim[cim_index]}</h1>
                        <p class="jelenlegi_szoveg">{szoveg[index]}</p>
                    </div>

                        
                </div>
                
            </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

                        <path fill="#BFD7FF" fill-opacity="1" d="M0,224L26.7,234.7C53.3,245,107,267,160,256C213.3,245,267,203,320,170.7C373.3,139,427,117,480,128C533.3,139,587,181,640,197.3C693.3,213,747,203,800,213.3C853.3,224,907,256,960,234.7C1013.3,213,1067,139,1120,122.7C1173.3,107,1227,149,1280,144C1333.3,139,1387,85,1413,58.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>



                    <path fill="#5465FF" fill-opacity="1" d="M0,64L26.7,106.7C53.3,149,107,235,160,266.7C213.3,299,267,277,320,250.7C373.3,224,427,192,480,186.7C533.3,181,587,203,640,208C693.3,213,747,203,800,181.3C853.3,160,907,128,960,144C1013.3,160,1067,224,1120,234.7C1173.3,245,1227,203,1280,160C1333.3,117,1387,75,1413,53.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>

        </div>
        <div class="ikonok">
            <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H168.415V168.415H0V0Z" fill="white" fill-opacity="0.01"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M84.2076 14.0346C45.4521 14.0346 14.0346 45.4521 14.0346 84.2076C14.0346 122.963 45.4521 154.381 84.2076 154.381C122.963 154.381 154.381 122.963 154.381 84.2076C154.381 45.4521 122.963 14.0346 84.2076 14.0346ZM0 84.2076C0 37.7012 37.7012 0 84.2076 0C130.714 0 168.415 37.7012 168.415 84.2076C168.415 130.714 130.714 168.415 84.2076 168.415C37.7012 168.415 0 130.714 0 84.2076Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M67.3082 159.544C66.6297 158.668 66.6297 150.862 67.3082 136.129C60.039 136.38 55.4462 135.875 53.5298 134.615C50.6555 132.725 47.7777 126.896 45.2244 122.788C42.6712 118.68 37.004 118.031 34.7157 117.112C32.4273 116.194 31.8528 112.451 41.0214 115.282C50.1902 118.113 50.6372 125.822 53.5298 127.625C56.4223 129.428 63.3371 128.639 66.4718 127.195C69.6061 125.751 69.3755 120.374 69.9345 118.244C70.6411 116.255 68.1503 115.814 68.0956 115.798C65.0357 115.798 48.9605 112.302 44.5448 96.7353C40.1295 81.1688 45.8174 70.9941 48.8517 66.6202C50.8744 63.7041 50.6955 57.4896 48.3149 47.9759C56.9588 46.8714 63.6291 49.592 68.3265 56.1384C68.331 56.176 74.4845 52.4792 84.2094 52.4792C93.9347 52.4792 97.3847 55.4904 100.047 56.1384C102.71 56.7865 104.84 44.6792 121.284 47.9759C117.851 54.7237 114.975 63.1557 117.17 66.6202C119.364 70.0846 127.977 81.1011 122.687 96.7353C119.159 107.158 112.226 113.513 101.887 115.798C100.701 116.176 100.108 116.787 100.108 117.629C100.108 118.892 101.711 119.03 104.02 124.949C105.56 128.894 105.671 140.163 104.354 158.756C101.017 159.605 98.4216 160.175 96.5665 160.467C93.2775 160.984 89.7064 161.273 86.1974 161.385C82.6888 161.497 81.4702 161.485 76.6195 161.033C73.3856 160.732 70.2818 160.236 67.3082 159.544Z" fill="black"/>
                </svg>
        </div>
        
        <div class="fill">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#000000" fill-opacity="1" d="M0,64L34.3,64C68.6,64,137,64,206,90.7C274.3,117,343,171,411,165.3C480,160,549,96,617,106.7C685.7,117,754,203,823,218.7C891.4,235,960,181,1029,165.3C1097.1,149,1166,171,1234,181.3C1302.9,192,1371,192,1406,192L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>

                
        </div>
    </div>
</main>

<style lang="scss">

    .main{
        border-color: #5465FF;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .egesz{
        height: 10%;
        width: 100%;
        background-color:#5465FF ;
    }
    .main{
        
        height: 70rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap ;
        justify-content:center;
        align-items: center;
        align-content: space-between;
        position:relative;
        
    }
    .cim{

        width:100%;
        display: flex;
        flex-direction: row;
        justify-content:space-evenly ;
        align-items: center;
        padding-bottom: 10%;
        padding-top: 10%;
    }
    .cim h1{
        font-size: 15rem;
    }
    .kor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        position: absolute;
        border-radius: 100%;
        text-align: center;
        font-size: 150%;
        width: 20rem;
        height: 30rem;
    }
    .tartalom{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        background-color: #E3E3E3;
    }
    .olvasas{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:100%

    }

    .elsohullam{
        display: block;
        z-index: 1;
    }
    .masodikhullam{
        
        display: block;
        z-index: 0;
    }
    .szoveg{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: space-between;

    }

    .szoveg div{
        align-self:flex-start ;
        flex-grow: 2;
        padding-left: 10%;
        padding-right: 10%;
    }
    .szoveg p{
        white-space: pre-line;
    }
    .szoveg img{
        align-self:flex-end ;
        padding-right: 10%;
       
    }
    .fill{
        height: 40rem;
        width: 100%;
        background-color: #5465FF;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        
    }
    .fill svg{
        width: 100%;
        display: block;

    }
    @media screen and (min-width: 750px){
        .main{
        
        height: 70rem;
        display: flex;
        flex-direction: row;
        justify-content:center;
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
        border-radius: 100%;
        text-align: center;
        font-size: 150%;
    }
    .kor1{
        
        background-color:#BFD7FF ;
        width: 32rem;
        height: 32rem;
        top: 25%;
        right: 65%;
        z-index: 4;
        
    }
    .kor2{
        background-color:#788BFF ;
        width: 32rem;
        height: 32rem;
        top: 2%;
        right: 37%;
        z-index: 5;
    }
    .kor3{
        
        background-color:#9BB1FF ;
        width: 32rem;
        height: 32rem;
        top: 65%;
        right: 65%;
        z-index: 3;
    }
    .kor4{
        background-color:#E3E3E3 ;
        width: 32rem;
        height: 32rem;
        top: 40%;
        right: 35%;
        z-index: 2;
    }
    .kor5{
        background-color:#BFD7FF ;
        width: 32rem;
        height: 32rem;
        top:15%;
        right: 7%;       
        z-index: 2;
    }
    }
    @media screen and (max-width: 1840px){
        .kor{
            transform: scale(.9) translate(15%,0%);
            
        }

    }
    @media screen and (max-width: 1580px){
        .kor{
            transform: scale(.8) translate(30%,0%);
        }
        
    }
    @media screen and (max-width: 1420px){
        .kor{
            transform: scale(.7) translate(30%,0%);
        }
    }
    @media screen and (max-width: 1120px){
        .kor{
            transform: scale(.6) translate(40%,0%);
            font-size: 200%;
        }
    }
    @media screen and (max-width: 1000px){
        .kor{
            transform: scale(.55) translate(45%,0%);
            font-size: 200%;
        }
    }
    @media screen and (max-width: 950px){
        .kor{
            transform: scale(.55) translate(55%,0%);
            font-size: 200%;
        }
    }
    @media screen and (max-width: 825px){
        .kor{
            transform: scale(.50) translate(58%,0%);
            font-size: 200%;
        }
    }
    @media screen and (max-width: 810px){
        .kor{
            transform: scale(.50) translate(63%,0%);
            font-size: 200%;
        }
    }
    @media screen and (max-width: 760px){
        .kor{
            transform: scale(.450) translate(66%,0%);
            font-size: 200%;
        }
    }
    @media screen and (max-width: 750px){
        .kor{
            font-size: 200%;
            top:none;
            right: none;
            bottom: none;
            left:none;
            
        }
        .main{
            position: relative;
            display: flex;
            flex-direction:row;

        }
    }
    .kor3:hover{
        animation: kiemeles 4s infinite;
    }

    @keyframes kiemeles{
        100%{
            z-index: 100;
            transform: scale(0.7);
        }
    }
</style>

<script lang="ts">
	import Navbar from "../../components/Navbar.svelte";
    import { onMount } from 'svelte';
    let hatra:any;
    let elore:any;
    let olvasas:any;
    //let kapcsolas= false;
    onMount(() => {
        hatra= document.querySelector('.hatra');
        elore= document.querySelector('.elore');
        olvasas= document.querySelector('.olvasas');
        //olvasas.style.display="none";
    });

    
    let cim_index=0;
    let index=0;
    
    
    let cim=["Csóka András", "Császár András", "Kővágó Levente", "Kulimák Máté","Tátrai Dominik Oszkár"];
    let szoveg=["------------------------------------------."
    
    ,"------------------------------------------."
    
    ,"------------------------------------------."
    
    ,"------------------------------------------."
    
    ,"------------------------------------------."];



    function elso(){
        index=0;
        cim_index=0
        olvasas.style.display="flex";
    }
    function masodik(){
        index=4
        cim_index=1;
        olvasas.style.display="flex";
    }
    function harmadik(){
        cim_index=2
        olvasas.style.display="flex";
    }
    function negyedik(){
        cim_index=3;
        olvasas.style.display="flex";
    }
    function otodik(){
        cim_index=4;
        olvasas.style.display="flex";
    }
    function hatodik(){
        cim_index=5;
        olvasas.style.display="flex";
    }
    function hetedik(){
        cim_index=6;
        olvasas.style.display="flex";
    }
</script>
