<main>
    <div class="scrum">

        <Navbar></Navbar>


        
            <div class="fejlec">
                <img src="icons/scrum.png" alt="scrum kép">
                <p>Scrum</p>
            </div>


            <div class="lepesvalaszto">
                
                    <div   on:click={masodik} class="gomb1 gomb btn " >
                        <p>1.lépés</p>
                        
                    </div>
                
                
                    <div  on:click={elso} class=" gomb2 gomb btn">
                        <p>2.lépés</p>
                    </div>
                
                
                    <div  on:click={harmadik} class=" gomb3 gomb btn">
                        <p>3.lépés</p>
                    </div>
                
                
                    <div  on:click={negyedik} class=" gomb4 gomb btn">
                        <p>4.lépés</p>
                    </div>
                
                
                    <div  on:click={otodik} class=" gomb5 gomb btn ">
                        <p>5.lépés</p>
                    </div>
                
                
                    <div  on:click={hatodik} class=" gomb6 gomb btn">
                        <p>6.lépés</p>
                    </div>
                
                
                    <div  on:click={hetedik} class=" gomb7 gomb btn">
                        <p>7.lépés</p>
                    </div>
                
                
                    <div  on:click={nyolcadik} class=" gomb8 gomb btn">
                        <p>8.lépés</p>
                    </div>
                
                
                    <div  on:click={kilencedik} class=" gomb9 gomb btn">
                        <p>9.lépés</p>
                    </div>
                
                
                    <div  on:click={tizedik} class=" gomb10 gomb btn">
                        <p>10.lépés</p>
                    </div>
                
                
                    <div  on:click={tizenegyedik} class=" gomb11 gomb btn ">
                        <p>11.lépés</p>
                    </div>
                
                
                    <div  on:click={tizenketedeik} class=" gomb12 gomb btn">
                        <p>12.lépés</p>
                    </div>
                
                    <div on:click={tizenharomadik} class=" gomb13 gomb btn">
                        <p>13.lépés</p>
                    </div>
                
            </div>


                <div class="container">
                
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
                        <path fill="var(--1)" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,202.7C672,171,768,117,864,117.3C960,117,1056,171,1152,208C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                        <path fill="var(--0)" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,277.3C672,309,768,299,864,266.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>

                    <div class="olvasas">

                        <div class="szoveg">
                            <div>
                                <h1 class="jelenlegi_cim">{cim[cim_index]}</h1>
                                <p class="jelenlegi_szoveg">{szoveg[index]}</p>
                            </div>
                            
                                <img src="icons/document.png" alt="kep" class="dockep">
                        </div>
                        <div class="nyilak">
                            <svg on:click={lapoz_hatra} class="hatra" width="100" height="161" viewBox="0 0 100 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M75 136.588L29.0683 90.6568C23.6439 85.2324 23.6439 76.356 29.0683 70.9316L75 25" stroke="var(--1)" stroke-width="48.5835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg on:click={lapoz_elore} class="elore" width="100" height="161" viewBox="0 0 100 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 136.589L70.9316 90.6573C76.3561 85.2329 76.3561 76.3565 70.9316 70.932L25 25" stroke="var(--1)" stroke-width="48.5839" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                    
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

                        <path fill="var(--3)" fill-opacity="1" d="M0,224L26.7,234.7C53.3,245,107,267,160,256C213.3,245,267,203,320,170.7C373.3,139,427,117,480,128C533.3,139,587,181,640,197.3C693.3,213,747,203,800,213.3C853.3,224,907,256,960,234.7C1013.3,213,1067,139,1120,122.7C1173.3,107,1227,149,1280,144C1333.3,139,1387,85,1413,58.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>



                    <path fill="var(--0)" fill-opacity="1" d="M0,64L26.7,106.7C53.3,149,107,235,160,266.7C213.3,299,267,277,320,250.7C373.3,224,427,192,480,186.7C533.3,181,587,203,640,208C693.3,213,747,203,800,181.3C853.3,160,907,128,960,144C1013.3,160,1067,224,1120,234.7C1173.3,245,1227,203,1280,160C1333.3,117,1387,75,1413,53.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
                </div>
                
                
    </div>
     
</main>

<style lang="scss">

    main{
        background-color:var(--0) ;
    }

    .container{
        background-color: white;
    }
    .scrum{
        width: 100%;
        background-color:var(--0) ;
        
    }
    .controls{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
       
    }
    .controls label{ 
        padding: 3px;
    }

    .fejlec{
        background-color: var(--0);
        height: 400px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        
    }
    .fejlec img {
        
        height: 70%;
        
        border-radius: 6%;
    }
    .fejlec p {
        font-size: 100px;
    }


    
    .lepesvalaszto{
        background-color: var(--0);
        height: 700px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-left: 10%;
        margin-right: 10%;
        
        align-items: center;
        
    }
    .controls{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
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
        transition: .3s;
    }
    .gomb1{
        background: var(--2);
        border-radius: 20px;
        z-index: 0;
        width: 15%;
        height: 20%;
        transform: translate(20%, -120%);
    }
    .gomb2{
        background: var(--3);
        border-radius: 20px;
        width: 16%;
        height: 20%;
        transform: translate(55% , -50%);
        
        z-index: 17;
    }
    .gomb3{
        background: var(--1);
        border-radius: 20px;
        
        width:20%;
        height: 25%;
        transform: translate(0% , 20%);
        
        z-index: 0;
    }
    .gomb4{
        background: var(--2);
        border-radius: 20px;
        width: 17%;
        height: 20%;
        transform: translate(110%, 5%);
        
        z-index: 6;
    }
    .gomb5{
        background: var(--1);
        border-radius: 20px;
        width: 20%;
        height: 20%;
        transform: translate(100%,-110%);
        
        z-index: 0;
    }
    .gomb6{
        background: var(--1);
        border-radius: 20px;
        width: 20%;
        height: 23%;
        transform: translate(130% , 75%);
        
        z-index: 0;
    }
    .gomb7{
        background: var(--3);
        border-radius: 20px;
        width: 20%;
        height: 20%;
        transform: translate(166% , 20%);
        
        z-index: 0;
    }
    .gomb8{
        background: var(--2);
        border-radius: 20px;
        width: 18%;
        height: 20%;
        transform: translate(213% , -70%);
        
        z-index: 0;
    }
    .gomb9{
        background: var(--1);
        border-radius: 20px;
        width: 18%;
        height: 20%;
        transform: translate(270% , 90%);
        
        z-index: 0;
    }
    .gomb10{
        background: var(--3);
        border-radius: 20px;
        width: 18%;
        height: 20%;
        transform: translate(300% , 00%);
        
        z-index: 0;
    }
    .gomb11{
        background: var(--1);
        border-radius: 20px;
        width: 18%;
        height: 20%;
        transform: translate(300% , -150%);
        
        z-index: 0;
    }
    .gomb12{
        background: var(--2);
        border-radius: 20px;
        width: 18%;
        height: 20%;
        transform: translate(350% , -70%);
        
        z-index: 0;
    }
    .gomb13{
        background: var(--1);
        border-radius: 20px;
        width: 18%;
        height: 20%;
        transform: translate(378% , 60%);
        
        z-index: 0;
    }

    .gomb p {
        font-size: 250%;
        text-align: justify;
    }
 



.gomb:hover{
    transition: .3s;
        border: 3px solid #000000;
    }

    .bekezdes{
        margin-left: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
    }


@media only screen and (max-width: 1000px){
        .gomb4{
            transform: translate(100%, 5%);
        }
        .gomb p {
            font-size: 180%;
        }
        .fejlec p{
            font-size: 80px;
        } 
        .fejlec img {
        
        height: 60%;
        
        border-radius: 6%;
    }
    }
@media only screen and (max-width: 650px){
        
        .gomb p {
            font-size: 140%;
        }
        .gomb1{
        background: var(--2);
        border-radius: 20px;
        z-index: 0;
        width: 15%;
        height: 15%;
        transform: translate(20%, -120%);
    }
    .gomb2{
        background: var(--3);
        border-radius: 20px;
        width: 16%;
        height: 15%;
        transform: translate(55% , -50%);
        
        z-index: 17;
    }
    .gomb3{
        background: var(--1);
        border-radius: 20px;
        
        width:20%;
        height: 20%;
        transform: translate(0% , 20%);
        
        z-index: 0;
    }
    .gomb4{
        background: var(--2);
        border-radius: 20px;
        width: 17%;
        height: 15%;
        transform: translate(110%, 5%);
        
        z-index: 6;
    }
    .gomb5{
        background: var(--1);
        border-radius: 20px;
        width: 20%;
        height: 15%;
        transform: translate(100%,-110%);
        
        z-index: 0;
    }
    .gomb6{
        background: var(--1);
        border-radius: 20px;
        width: 20%;
        height: 18%;
        transform: translate(130% , 75%);
        
        z-index: 0;
    }
    .gomb7{
        background: var(--3);
        border-radius: 20px;
        width: 20%;
        height: 15%;
        transform: translate(166% , 20%);
        
        z-index: 0;
    }
    .gomb8{
        background: var(--2);
        border-radius: 20px;
        width: 18%;
        height: 15%;
        transform: translate(213% , -70%);
        
        z-index: 0;
    }
    .gomb9{
        background: var(--1);
        border-radius: 20px;
        width: 18%;
        height: 15%;
        transform: translate(270% , 90%);
        
        z-index: 0;
    }
    .gomb10{
        background: var(--3);
        border-radius: 20px;
        width: 18%;
        height: 15%;
        transform: translate(300% , 00%);
        
        z-index: 0;
    }
    .gomb11{
        background: var(--1);
        border-radius: 20px;
        width: 18%;
        height: 15%;
        transform: translate(300% , -150%);
        
        z-index: 0;
    }
    .gomb12{
        background: var(--2);
        border-radius: 20px;
        width: 18%;
        height: 15%;
        transform: translate(350% , -70%);
        
        z-index: 0;
    }
    .gomb13{
        background: var(--1);
        border-radius: 20px;
        width: 18%;
        height: 15%;
        transform: translate(378% , 60%);
        
        z-index: 0;
    }
	.fejlec img {
        
        height: 40%;
        
        border-radius: 6%;
    }
    }
.dockep{
        width: 30%;
    }
    
/*------------------------------------------------------------*/

.ellenorzes{
        background-color: var(--3);
        margin-top:2rem;
        padding: 5% 10% 5% 10%;
        border-radius: 20px;
        box-shadow: var(--0) 5px 5px 5px ;



    }
    .ellenorzes:hover{
        animation: ellenorzes 1s ease 0s 1 normal forwards;
    }
    @keyframes ellenorzes{
        0%{
            transform: scale(1);
            

        }
        100%{
            transform: scale(0.9);
            

        }
    }
    .ertek{
        background-color:var(--4) ;
        margin-left: 5%;
        width: 5rem;
        height: 2rem;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-self: flex-end;

    }
    .skala{
        padding-top:2% ;
        padding-left: 2%;
        padding-bottom: 2%;
        width: 25%;
        height: 30%;
        background-color: var(--1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-radius: 20px;;
        margin-left: 5%;
    }

.slidecontainer{
    
    width: 80%;
    display: flex;
    flex-direction: row;

    align-content: space-between;
    align-items: center ;
}
.slider {
  -webkit-appearance: none;
  appearance: none; 
  width:100%;
  cursor: grab;
  outline: none;
  overflow: hidden;
  border-radius: 16px;

}

.slider::-webkit-slider-runnable-track {
  height: 15px;
  background: #292D32;
  border-radius: 20px;
}

.slider::-moz-range-track {
  height: 15px;
  background: #292D32;
  border-radius: 20px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none; 
  height: 1rem;
  width: 1rem;
  background-color: var(--4);
  border-radius: 50%;
  border: 2px solid var(--4);
  box-shadow: -407px 0 0 400px var(--4);
}

.slider::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: var(--4);
  border-radius: 50%;
  border: 1px solid var(--4);
  box-shadow: -407px 0 0 400px var(--4);
}
    .main{

        border-color: var(--0);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    main {
        width: 100%;
        background-color:var(--0) ;
        
    }
    .main{
        
        height: 70rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap ;
        justify-content:center;
        align-items: center;
        align-content: space-between;
        
        
    }
    .cim{

        width:100%;
        display: flex;
        flex-direction: row;
        justify-content:space-evenly ;
        align-items: center;
        padding-bottom: 20%;
        padding-top: 10%;
        flex-wrap: wrap;
    }
    .cim h1{
        font-size: 15rem;
    }

    .ph{
        background-color: var(--1);
        width: 23rem;
        height: 23rem;
        border-radius: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        margin-left: 10%;
        margin-bottom: 10%;
    }
    
    .tartalom{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        background-color: var(--4);
    }
    .olvasas{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:100%

    }
  
    .nyilak{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
        margin: auto;
        width:80%;
        padding-top: 5%;
        
    }   
    .nyilak:hover{
        animation: kiemeles 4s infinite;
    }
    .projharomszog{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items:center;
    }
    .projharomszog svg{
        transform: scale(0.6);
       
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
        flex-wrap: wrap;

    }

    .szoveg div{
        align-self:flex-start ;
        flex-grow: 2;
        padding-left: 10%;
        padding-right: 10%;
    }
    .szoveg p{
        white-space: pre-line;
        white-space: pre-wrap;
    }
    .szoveg img{
        align-self:flex-end ;
        padding-right: 10%;
       
    }
    


   

    


</style>

<script lang="ts">
	//import { slide } from "svelte/types/runtime/transition";
	import Navbar from "../../components/Navbar.svelte";
    import { onMount } from 'svelte';
      


    let hatra:any;
    let elore:any;
    let olvasas:any;
    let szovegek: any;
    let nyilak:any;
    let kapcsolas_1= false;
    let kapcsolas_2= false;
    let kapcsolas_3= false;
    let kapcsolas_4= false;
    let kapcsolas_5= false;
    let kapcsolas_6= false;
    let kapcsolas_7= false;
    let kapcsolas_8= false;
    let kapcsolas_9= false;
    let kapcsolas_10= false;
    let kapcsolas_11= false;
    let kapcsolas_12= false;
    let kapcsolas_13= false;
    

    onMount(() => {
        hatra= document.querySelector('.hatra');
        elore= document.querySelector('.elore');
        olvasas= document.querySelector('.olvasas');
        szovegek = document.querySelector('.szoveg');
        nyilak = document.querySelector('.nyilak');
        
        olvasas.style.display="none";        
    });
    
    
    let cim_index=0;
    let index=0;
    
    
    let cim=["1. Mi a Scrum?","2. A Terméktulajdonos:","3. Scrum Mester:","4. A Fejlesztőcsapat:","5. A Sprint:","6. Sprint tervezés:","7. Hogyan készül el a kiválasztott munka?","8. Napi Scrum:","9. Sprint Áttekintés:","10. Sprint Visszatekintés:","11. Termék Backlog:","12. Sprint Backlog:","13. A 'Kész' fogalma:"];
    let szoveg=["A Scrum egy agilis módszertan, amely együttműködést és folyamatos fejlesztést támogat. Az agilitás azt jelenti, hogy a projekt csapata folyamatosan javítja és finomítja a munkafolyamatot a visszajelzések (Daily Scrum) alapján. Ez a módszer hatékony lehet olyan projektekben, ahol a feladatok és a célok nem teljesen meghatározottak, és a változások gyakoriak, például a szoftvertervezésben."
    
    ,"A terméktulajdonos nem egy bizottság, hanem egy személy.\nAz egyetlen személy, aki felelős a Termék Backlog <ez egy link lesz> kezeléséért.\nA terméktulajdonos is elvégezheti, ezeket a feladatokat, de elvégeztetheti a fejlesztőcsapattal is.\nAhhoz, hogy a Terméktulajdonos sikeresen el tudja végezni a feladatát, a teljes szervezetnek tiszteletben kell tartania a döntéseit. A Terméktulajdonos döntései a Termék Backlog tartalmában és az elemek sorrendjében nyilvánulnak meg. Senki nincs felhatalmazva arra, hogy a Fejlesztőcsapattal a meghatározottól eltérő követelmény-rendszer szerint dolgoztasson, és a Fejlesztőcsapat sem fogadhat el utasítást senki mástól."
    
    ,"A Scrum Mester a Scrum megértéséért és betartásáért felelős. A Scrum Mesterek ezt az által érik el, hogy megbizonyosodnak a csapat Scrum elméleti-, gyakorlati- és szabályismeretéről, valamint meggyőződnek elkötelezettségükről is.\nA Scrum Mester szolgáltatásai a Terméktulajdonos felé\nA Scrum Mester többféle módon segíti a Terméktulajdonost, többek között azzal, hogy:\nMódszereket alakít ki a Termék Backlog hatékony kezelésére;\n\tSegít megérteni a Scrum Csapatnak, hogy miért szükséges, hogy a Termék Backlog elemei világosak, tömörek legyenek;\n\tMegérti a terméktervezést empirikus környezetben;\n\tBiztosítja, hogy a Terméktulajdonos tudja, hogy miként rendezze a Termék Backlogot az érték maximalizálása érdekében\n\tÉrti és gyakorolja az agilitást; valamint,\n\tKérés illetve szükség esetén előmozdítja a Scrum események lebonyolítását.\n\tA Scrum Mester szolgáltatásai a Fejlesztőcsapat felé\nA Scrum Mester többféle módon segíti a Fejlesztőcsapatot, beleértve:\nFelkészíti, támogatja a Fejlesztőcsapatot az önszerveződésben és a kereszt-funkcionalitás kialakításában;\n\tSegíti a Fejlesztőcsapatot magas színvonalú termékek előállításában;\n\tEltávolítja a Fejlesztőcsapat útjába kerülő akadályokat;\n\tKérés illetve szükség esetén előmozdítja a Scrum események lebonyolítását; és,\n\tSegíti a Fejlesztőcsapatot olyan szervezeti környezetben, ahol még nem teljes mértékben vezették be és értették meg a Scrumot."
    
    ,"A Fejlesztőcsapat olyan szakemberekből áll, akik azon dolgoznak, hogy minden egyes Sprint végén leszállítható legyen a termék egy “Kész” potenciálisan kibocsátható verziója.\nA Fejlesztő csapatokat úgy állítja össze és hatalmazza fel a szervezet, hogy ők maguk szervezzék és menedzseljék saját munkájukat. Az így létrejövő szinergia optimalizálja a Fejlesztőcsapat hatékonyságát és termelékenységét.\nA Fejlesztőcsapatok az alábbi tulajdonságokkal rendelkeznek:\nÖnszerveződőek. Senki – még a Scrum Mester – sem mondja meg a Fejlesztőcsapatnak, hogy miként hozzanak létre a Termék Backlogból potenciálisan szállítható funkcionalitást tartalmazó Inkrementumokat;\n\tA Fejlesztőcsapatok kereszt-funkcionálisak, és csapatként minden olyan ismerettel és készséggel rendelkeznek, ami szükséges a termék Inkrementumok elkészítéséhez;\n\tA Scrum a „Fejlesztő”-n kívül nem alkalmaz külön titulust a Fejlesztőcsapat egyes tagjaira, függetlenül attól, hogy egyénenként milyen tevékenységet végeznek. Ez alól a szabály alól nincs kivétel.\n\tA Fejlesztőcsapatokban nincsenek alcsoportok egyes célfeladatok – pl. tesztelés vagy üzleti elemzés – elvégzésére; ez alól a szabály alól nincs kivétel; illetve,\n\tA Fejlesztőcsapatban az egyes tagok speciális ismeretekkel, készségekkel és szakterületi tudással rendelkezhetnek, de a felelősség az egész Fejlesztőcsapatra, mint egy egységre hárul. "
    
    ,"A Scrum lelke a legfeljebb egy hónapig tartó Sprint, melynek időtartama alatt előáll egy “Kész”, használható és potenciálisan kibocsátható termék.\nA Sprintek hossza legjobb esetben a teljes fejlesztési idő során azonos. Az előző Sprint lezárása után azonnal egy újabb Sprint kezdődik.\nA Sprintek Sprint Tervezésből, Napi Scrumokból, a fejlesztési munkából, a Sprint Áttekintésből és a Sprint Visszatekintésből épülnek föl.\nA Sprint során:\nNem történnek olyan változtatások, melyek veszélyeztetik a Sprint Célját;\n\tA minőségi célok nem csökkennek;\n\tA Terméktulajdonos és a Fejlesztőcsapat újra tárgyalhatja és tisztázhatja a Feladatokat (Scope) az időközben szerzett ismeretek alapján.\n\tHasonlóan a projektekhez, a Sprintek is valamilyen cél elérését szolgálják.Minden egyes Sprint tartalmaz:\negy meghatározást, ami leírja, hogy minek kell megvalósulnia, egy modellt és egy rugalmas tervet, ami\n\tirányt mutat a megvalósításban. A Sprint részének tekintjük továbbá az elvégzett munkát és az eredményül kapott terméket.\n\tA Sprintek időtartama egy naptári hónapra korlátozott.  \nHa a Sprint hossza túl hosszú, megváltozhat a megvalósítandó dolog specifikációja, emelkedhet a komplexitása és nőhet a kockázat. \nA Sprintek úgy biztosítják a tervezhetőséget, hogy legalább minden naptári hónapban egyszer ellenőrzik a Sprint Cél felé haladást, és szükség esetén kiigazítják a folyamatot."
    
    ,"A Sprintben végzendő munkát a Sprint Tervezésen tervezik meg.\nEz a terv a teljes Scrum Csapat közös munkájának eredménye.\nA Sprint Tervezés időtartama egy hónapos Sprint esetében legfeljebb nyolc óra. \nRövidebb Sprintek esetén az esemény időtartama általában kisebb.\nA Scrum Mester biztosítja, hogy az esemény megtörténjen, és a résztvevők megértsék annak célját. A Scrum Mester ráneveli a Scrum Csapatot az időkorlátok betartására.\nA Sprint Tervezés a következő kérdésekre válaszol:\nMit fog tartalmazni a következő Sprint eredményeképpen szállítandó Inkrementum?\n\tHogyan lehet elvégezni az Inkrementum előállításához szükséges munkát?\n\tMi fog elkészülni ebben a Sprintben?\n\tA Fejlesztőcsapat azon dolgozik, hogy felvázolja a Sprint során megvalósítandó funkcionalitást.\nA Terméktulajdonos bemutatja a Sprint során elérendő célt és azokat a Termék Backlog tételeket, amelyek megvalósításával a Sprint eléri a Sprint Célt. A teljes Scrum Csapat együttműködik a Sprintben elvégzendő munka megértésének érdekében.\nEnnek a megbeszélésnek a bemeneti elemei a Termék Backlog, a legutóbbi termék Inkrementum, a Fejlesztőcsapat tervezett kapacitása a Sprint ideje alatt, valamint a Fejlesztőcsapat korábbi teljesítménye.\nAz, hogy az adott Sprint számára a Termék Backlogból hány tételt választanak ki, egyedül a Fejlesztőcsapaton múlik. Kizárólag a Fejlesztőcsapat tudhatja, hogy mit képes végrehajtani a soron következő Sprintben.\nMiután a Fejlesztőcsapat előre jelezte, hogy a Termék Backlog mely elemeit fogja leszállítani a Sprint során, a Scrum Csapat elkészíti a Sprint Célt ."
    
    ,"Miután a Sprint Célját meghatározta és a Sprintbe kerülő Termék Backlog tételeket kiválasztotta, a Fejlesztőcsapat eldönti, hogy a Sprint során miként építi be ezt a funkcionalitást a “Kész” termék inkrementumba.\nAz erre a Sprintre kiválogatott Termék Backlog tételeket, valamint ezek leszállítási tervét együttesen Sprint Backlognak (Sprint Teendőlista) nevezik. \nA Fejlesztőcsapat általában a Termék Backlog működő termék inkrementummá konvertálásához szükséges feladatok meghatározásával és a rendszer megtervezésével kezdi meg a munkát. \nA munkamennyiség- és becsült ráfordítás szerint is változhat.\nMindamellett a Sprint Tervezés során elegendő mennyiségű kivitelezendő munkát terveznek meg a Fejlesztőcsapat részére annak érdekében, hogy megalapozottan előre tudják vetíteni, hogy mit vélnek elvégezhetőnek a soron következő Sprint alatt.\nA megbeszélés végére a Fejlesztőcsapat a Sprint első napjaira tervezett feladatokat gyakran egy napos vagy annál kisebb részekre bontja le.\nA Fejlesztőcsapat önszerveződve vállalja el a Sprint Backlogban szereplő egyes feladatokat a Sprint Tervezés alatt, valamint amennyire szükséges, a Sprint közben is.\nA Terméktulajdonos segíthet tisztázni a kiválasztott Termék Backlog tételeket és kompromisszumokat köthet.\nHa a Fejlesztőcsapat úgy ítéli meg, hogy túl sok vagy túl kevés az elvégzendő munka, újratárgyalhatja a kiválasztott Termék Backlog tételeket a Terméktulajdonossal.\nA Fejlesztőcsapat másokat is meghívhat a megbeszélésre, hogy technikai vagy szakterületi tanácsokat adjanak.\nA Sprint Tervezés végére a Fejlesztőcsapatnak el kell tudni magyarázni a Terméktulajdonosnak és a Scrum Mesternek, hogy miként szándékozik önszerveződő csapatként dolgozni a Sprint Cél megvalósítása és az elvárt inkrementum elkészítése érdekében."
    
    ,"A Napi Scrum megbeszélés egy maximum 15 perc időtartamú megbeszélés, ahol a Fejlesztőcsapat összehangolja a tevékenységeket, és megtervezi az elkövetkezendő 24 órát.\nEzt a legutóbbi Napi Scrum megbeszélés óta elvégzett feladatok elemzésével, majd a következő Napi Scrum előtt elvégezhető feladatok megtervezésével teszi meg. \nA Napi Scrumot minden nap ugyanabban az időben, ugyanazon a helyen tartják az egyszerűség és hatékonyság elősegítése miatt.  \nA megbeszélés során a Fejlesztőcsapat minden egyes tagja az alábbiakat fejti ki:\nMit sikerült elvégeznem tegnap, ami a Fejlesztőcsapatot segítette a Sprint Cél elérésében? \n\tMit fogok tenni ma, ami a Fejlesztőcsapatot segíti a Sprint Cél elérésében? \n\tLátok-e akadályozó tényezőt, ami gátol engem vagy a Fejlesztőcsapatot a Sprint Cél elérésében?\n\tA Napi Scrum során a Fejlesztőcsapat ellenőrzi a Sprint Célhoz vezető folyamat haladását és azt, hogy a haladás tendenciája miként változik a Sprint Backlogban szereplő munka teljesítése felé. A Napi Scrum maximálja annak a valószínűségét, hogy a Fejlesztőcsapat eléri a Sprint Célt. A Fejlesztőcsapat vagy egyes csapattagok gyakran közvetlenül a Napi Scrum után részletesen megbeszélik a Napi Scrumon felmerült kérdéseket, vagy áttervezik a Sprintben hátralévő munkát. \nA Scrum Mester biztosítja azt, hogy a Fejlesztőcsapat tagjai minden nap megtartsák a megbeszélést, de a Fejlesztőcsapat felelős a Napi Scrum levezetéséért. \nA Scrum Mester tanítja meg a Fejlesztőcsapatnak, hogy miként tudják a Napi Scrumot a 15 perces időkereten belül megtartani.\nA Napi Scrum javítja a kommunikációt, szükségtelenné tesz egyéb megbeszéléseket, azonosítja és így eltávolíthatóvá teszi a fejlesztés útjába kerülő akadályokat, kihangsúlyozza és elősegíti a gyors döntéshozatalt és növeli a Fejlesztőcsapat tudását. \nEz egy, a munka haladásának elemzése és hangolása szempontjából kulcsfontosságú megbeszélés."

    ,"A Sprint Áttekintést (Sprint Review) a Sprint végén tartják azzal a céllal, hogy ellenőrizzék az Inkrementumot és szükség esetén módosítsák a Termék Backlogot.\nA Sprint Áttekintésen a Scrum Csapat tagjai és az megrendelő oldal egyeztetik, hogy mi történt a Sprint során.  \nEzt és a Sprint során a Termék Backlogban történt változásokat alapul véve a résztvevők egyeztetik a következő időszakban végrehajtandó, optimális/maximális értéket képviselő teendőket.  \nEz egy informális megbeszélés, melynek célja nem a projekt státuszának riportolása, hanem hogy az Inkrementum bemutatásán keresztül visszajelzés érkezzen a megrendelő oldal részéről, valamint, hogy erősítse az együttműködést a két oldal között.\nEnnek a megbeszélésnek az időtartama egy 1 hónapos sprint esetén 4 órára korlátozódik. Rövidebb Sprintek esetében általában rövidebb ideig tart. \nA Scrum Mester gondoskodik arról, hogy ez az esemény létrejöjjön és a résztvevők megértsék annak célját. A Scrum Mester mindenkit figyelmeztet az időkorlát betartására. \nA Sprint Áttekintés az alábbi elemeket tartalmazza: \nA résztvevői kör a Scrum Csapatból és a Termék Tulajdonos által meghívott kulcs érintettekből áll;\n\tA Terméktulajdonos megállapítja, hogy melyik Termék Backlog tétel lett “Kész” és melyik nem lett “Kész”; \n\tA Fejlesztőcsapat megvitatja, mi ment jól a Sprint során, milyen problémákba futott bele, és hogyan oldotta meg azokat; \n\tA Fejlesztőcsapat szemlélteti a “Kész” munkát, és válaszol az inkrementummal kapcsolatos kérdésekre; \n\t A Terméktulajdonos bemutatja a Termék Backlog aktuális állapotát, előrevetíti a várható befejezési dátumokat az addigi haladás alapján (amennyiben ez szükséges);\n\t Az összes résztvevő közös munkával meghatározza, hogy mik legyenek a következő feladatok, így a Sprint Áttekintés eredménye értékes bemenetként szolgál a következő Sprint Tervezéshez;\n\tAnnak áttekintése, hogy a piac, illetve a termék várható használata megváltoztatta-e azt, hogy mik a soron következő, legnagyobb értéket szállító tennivalók;\n\t Az ütemezés, költségvetés, várható képességek, funkciók és a piac áttekintése a termék következő release-ére vonatkozóan. \n\tA Sprint Áttekintés eredménye egy módosított Termék Backlog, ami meghatározza a következő Sprint során megvalósítani tervezett Termék Backlog tételeket. A Termék Backlog teljeskörűen is módosítható, annak érdekében, hogy az akár az új piaci lehetőségeknek is megfeleljen. "
    
    ,"A Sprint Visszatekintés egy lehetőség a Scrum Csapatnak arra, hogy elemezze saját tevékenységét, és ezzel kapcsolatban egy fejlesztési tervet készítsen, amit a következő Sprintek során megvalósít.\nA Sprint Visszatekintés a Sprint Áttekintés után, a következő Sprint Tervezés előtt történik. \nEgy hónapos Sprintek esetén ez egy háromórás időtartamra korlátozott megbeszélés. Rövidebb Sprinteknél általában rövidebb. \nA Scrum Mester biztosítja, hogy az esemény létrejöjjön és a résztvevők megértsék annak célját. A Scrum Mester gondoskodik arról, hogy az esemény ne lépje túl az időkorlátot.\nA Scrum Mester a Scrum Csapat egyenrangú tagjaként, mint a Scrum keretrendszer betartásáért felelős szereplő vesz részt a megbeszélésen. A Sprint Visszatekintés célja, hogy:\nMegvizsgálják, hogy mennyire volt sikeres a legutóbbi Sprint az emberek, kapcsolatok, folyamatok és eszközök szempontjából;\n\tAzonosítsák és sorba rendezzék a jól működő főbb elemeket és a lehetséges javításokat; valamint,\tTervet készítsenek a Scrum Csapat működésének javítására.\n\tA Scrum Mester támogatja a Scrum Csapatot abban, hogy a Scrum folyamat keretrendszerén belül folyamatosan javítsa a fejlesztés folyamatait és gyakorlatait annak érdekében, hogy a következő Sprint még hatékonyabb és élvezetesebb legyen. \nA Scrum Csapat minden egyes Sprint Visszatekintés során különféle terveket készít a termék minőségének javítására, a “Kész” termék definíciójának módosításával. \nA Sprint Visszatekintés végére a Scrum Csapatnak meg kell határozni azokat a szükséges javításokat, amiket a következő Sprintben meg fog valósítani. \nEzen javítások következő Sprintben történő megvalósítása tulajdonképpen a Scrum Csapat működésének saját megfigyelésen alapuló korrekciója. \nHabár javító intézkedések bármikor tehetők, a Sprint Visszatekintés egy formális lehetőséget biztosít arra, hogy a csapat magára az ellenőrzésre és korrekcióra, mint tevékenységekre összpontosítson."    
        
    ,"A Termék Backlog egy sorba rendezett lista, ami minden olyan dolgot tartalmaz, amire szükség lehet a termékben, valamint ez alkotja a termékkel kapcsolatos változtatási követelmények egyetlen forrását. \nA Terméktulajdonos felelős a Termék Backlogért, beleértve annak tartalmát, elérhetőségét és sorba rendezését. A Termék Backlog sosem tekinthető teljesnek. \nA legelső változata csak a kezdetben ismert és legjobban megértett követelményeket fekteti le. A Termék Backlog a termék és a majdani használati környezet változásával összhangban fejlődik. \nA Termék Backlog dinamikus; folyamatosan változik annak érdekében, hogy meghatározza azt, hogy mi szükséges ahhoz, hogy a termék megfelelő, versenyképes és hasznos legyen. \nAmeddig egy termék létezik, a hozzá tartozó Termék Backlog is létezik. \nA Termék Backlog tartalmazza az összes olyan jellemzők, funkciók, követelmények, továbbfejlesztések és javítások formájában megjelenő változtatást, amiket a termék jövőbeni kibocsátásaiban el kell végezni.\nA Termék Backlog tételeihez leírást, sorrendi helyezést, becslést és értéket rendelnek.\nAmint egy terméket elkezdenek használni és ezáltal értéket termel, valamint a piacról visszajelzések érkeznek, a Termék Backlog egy nagyobb és átfogóbb listává alakul. \nA követelmények folyamatosan változnak, ennek megfelelően a Termék Backlog egy élő, folyamatosan alakuló munkaanyag\nAz üzleti követelményekben, piaci vagy technológiai feltételekben beállt változások hatására a Termék Backlog is változhat. \nGyakran több Scrum Csapat dolgozik együtt ugyanazon a terméken. A termékkel kapcsolatos várható munkák leírására ilyen esetekben is egyetlen Termék Backlogot használnak. \nEkkor a Termék Backloghoz rendelhető egy olyan tulajdonság, melynek segítségével a backlog elemei csoportosíthatók.\nA Termék Backlog finomítása abból áll, hogy további részletekkel, becsléssel egészítjük ki az elemeket, illetve változtatjuk azok sorrendjét. \nEz egy folyamatos tevékenység, amely során a Fejlesztőcsapat és a Terméktulajdonos közösen dolgoznak a tételek részletein. E folyamatban átnézik és felülvizsgálják a Termék Backlog tételeket. A Scrum Csapat dönti el, hogy ez a folyamat hogyan és mikor zajlik. Ez a tevékenység a Fejlesztő csapat kapacitásának általában nem több mint 10%-át köti le. \nMindamellett a Termék Backlog elemeit bármikor frissítheti a Terméktulajdonos, vagy azok frissíthetők a Terméktulajdonos döntése alapján. \nA sorban előbb álló tételek világosabbak és részletesebben kifejtettek, mint a hátrébb állók. \nA nagyobb fokú tisztázottságnak és részletezésnek köszönhetően pontosabb becslések készíthetők; minél hátrébb van a sorban egy tétel, annál kevesebb részlet ismert azzal kapcsolatban. \nAzok a Termék Backlog tételek, amelyekkel a Fejlesztőcsapat a soron következő Sprintben foglalkozni fog, kellően részletezettek ahhoz, hogy bármelyiket „Kész” állapotba lehessen hozni a következő Sprint időtartama alatt. "
        
    ,"A Sprint Backlog a Termék Backlog elemeinek egy, a Sprintre kiválasztott halmazát, és a Sprint Cél megvalósítására vonatkozó tervet tartalmaz.  \nA Sprint Backlog mindazt a munkát láthatóvá teszi, melyet a Fejlesztőcsapat szükségesnek vél elvégezni a Sprint Cél teljesítéséhez.  \nA Sprint Backlog egy olyan terv, ami elég részletes ahhoz, hogy a haladásban bekövetkezett változások a Napi Scrum során érthetőek legyenek. \nA Fejlesztőcsapat a Sprint során folyamatosan módosítja a Sprint Backlogot, mely egyre tisztábbá, világosabbá válik a Sprint során.  \nEz úgy valósul meg, hogy amikor a Fejlesztőcsapat dolgozik a terv megvalósításán, egyre több ismeretet gyűjt össze a Sprint Cél eléréséhez szükséges munkáról.  \nAmikor új feladat végrehajtása válik szükségessé, a Fejlesztőcsapat felveszi azt a Sprint Backlogba.  \nAhogy haladnak a munkával, a becsült hátralévő ráfordítást folyamatosan frissítik. Amennyiben a terv egyes elemeit szükségtelennek tartják, eltávolítják azokat.  \nA Sprint alatt kizárólag a Fejlesztőcsapat változtathat a Sprint Backlogon. \nA Sprint Backlog egy nyilvános, elérhető, valós idejű képe annak a munkának, amit a Fejlesztőcsapat a Sprint során el kíván végezni, és csak és kizárólag a Fejlesztőcsapaté. "
        
    ," Amikor egy Termék Backlog tételt Késznek nyilvánítanak, mindenkinek pontosan kell tudnia, hogy a “Kész” definíció mit is jelent. Bár ez Scrum Csapatonként jelentősen eltérhet, az áttekinthetőség biztosítása érdekében a csapattagoknak közös, egyértelmű értelmezéssel kell rendelkezniük arról, mikor tekintenek egy munkát késznek. Ez a “Kész definíciója” a Scrum Csapat számára, és ezt használják annak megállapítására, hogy a termék Inkrementummal való munka mikor fejeződik be.  "
    
    
    ,"A fejezetek végére értél, gratulálunk, reméljük segíthettünk!"];



    function elso(){
        if(kapcsolas_1==false){
            index=1;
            cim_index=1;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }
        else if(kapcsolas_1==true){
            olvasas.style.display="none";

        }
        kapcsolas_1=!kapcsolas_1;
    }
    function masodik(){
        if(kapcsolas_2==false){
            index=0;
            cim_index=0;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }
        else if(kapcsolas_2==true){
            olvasas.style.display="none";
        }
        kapcsolas_2=!kapcsolas_2;

    }
    function harmadik(){
        if(kapcsolas_3==false){
            index=2;
            
            cim_index=2
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }

        else if(kapcsolas_3==true){
            olvasas.style.display="none";
        }
        kapcsolas_3=!kapcsolas_3;
    }
    function negyedik(){
        if(kapcsolas_4==false){
            index=3;
            cim_index=3;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }

        else if(kapcsolas_4==true){
            olvasas.style.display="none";

        }
        kapcsolas_4=!kapcsolas_4;
    }
    function otodik(){
        if(kapcsolas_5==false){
            index=4;
            cim_index=4;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }

        else if(kapcsolas_5==true){
            olvasas.style.display="none";
        }
        kapcsolas_5=!kapcsolas_5;
    }
    function hatodik(){
        if(kapcsolas_6==false){ 
            index=5;       
            cim_index=5;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }

        else if(kapcsolas_6==true){
            olvasas.style.display="none";
        }
        kapcsolas_6=!kapcsolas_6;
    }
    function hetedik(){
        if(kapcsolas_7==false){
            index=6;
            cim_index=6;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }

        else if(kapcsolas_7==true){
            olvasas.style.display="none";
        }
        kapcsolas_7=!kapcsolas_7;
    }
    
    function nyolcadik(){
        if(kapcsolas_8==false){
            index=7;
            cim_index=7;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }
        else if(kapcsolas_8==true){
            olvasas.style.display="none";

        }
        kapcsolas_8=!kapcsolas_8;
    }
    
    function kilencedik(){
        if(kapcsolas_9==false){
            index=8;
            cim_index=8;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }
        else if(kapcsolas_9==true){
            olvasas.style.display="none";

        }
        kapcsolas_9=!kapcsolas_9;
    }
    
    function tizedik(){
        if(kapcsolas_10==false){
            index=9;
            cim_index=9;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }
        else if(kapcsolas_10==true){
            olvasas.style.display="none";

        }
        kapcsolas_10=!kapcsolas_10;
    }
    
    function tizenegyedik(){
        if(kapcsolas_11==false){
            index=10;
            cim_index=10;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }
        else if(kapcsolas_11==true){
            olvasas.style.display="none";

        }
        kapcsolas_11=!kapcsolas_11;
    }
    
    function tizenketedeik(){
        if(kapcsolas_12==false){
            index=11;
            cim_index=11;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }
        else if(kapcsolas_12==true){
            olvasas.style.display="none";

        }
        kapcsolas_12=!kapcsolas_12;
    }
    
    function tizenharomadik(){
        if(kapcsolas_13==false){
            index=12;
            cim_index=12;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
        }
        else if(kapcsolas_13==true){
            olvasas.style.display="none";

        }
        kapcsolas_13=!kapcsolas_13;
    }

    function lapoz_elore(){
        if (index != szoveg.length - 1){
           index++;
           cim_index++;
        }
        else{
            index=szoveg.length-1;
        }
    }
    function lapoz_hatra(){
        if (index!=0){
            index--;
            cim_index--;
        }

    }
    

</script>


