<main>
    <div class="egesz">
    <Navbar></Navbar>
        <div class= "cim">
            <img src="icons/waterfall-chart.png">
            <h1>Vízesés</h1>
        </div>
        <div class="main">
            <div on:click={elso} class="kor kor1">
                <h3>2.lépés</h3>
            </div>
            <div on:click={masodik} class="kor kor2">
                <h3>1.lépés</h3>
            </div>
            <div on:click={harmadik} class="kor kor3">
                <h3>3.lépés</h3>
            </div>
            <div on:click={negyedik} class="kor kor4">
                <h3>4.lépés</h3>
            </div>
            <div on:click={otodik} class="kor kor5">
                <h3>5.lépés</h3>
            </div>            
            <div on:click={hatodik} class="kor kor6">
                <h3>6.lépés</h3>
            </div>            
            <div on:click={hetedik} class="kor kor7">
                <h3>7.lépés</h3>
            </div>

        </div>
        <div on:click={haromszog} class="ph">
            <svg width="274" height="243" viewBox="0 0 274 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M119.68 9.99995C127.378 -3.33338 146.622 -3.33334 154.321 10L271.234 212.5C278.932 225.833 269.309 242.5 253.913 242.5H20.0865C4.69051 242.5 -4.93194 225.833 2.76606 212.5L119.68 9.99995Z" fill="#BFD7FF"/>
                <path d="M138 88C102.185 88 73 117.185 73 153C73 188.815 102.185 218 138 218C173.815 218 203 188.815 203 153C203 117.185 173.815 88 138 88ZM169.07 138.05L132.215 174.905C131.305 175.815 130.07 176.335 128.77 176.335C127.47 176.335 126.235 175.815 125.325 174.905L106.93 156.51C105.045 154.625 105.045 151.505 106.93 149.62C108.815 147.735 111.935 147.735 113.82 149.62L128.77 164.57L162.18 131.16C164.065 129.275 167.185 129.275 169.07 131.16C170.955 133.045 170.955 136.1 169.07 138.05Z" fill="#5465FF"/>
                </svg>
                
        </div>
        <div class="tartalom">
            <svg class="elsohullam" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path  fill="#BFD7FF" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,181.3C384,181,480,235,576,229.3C672,224,768,160,864,154.7C960,149,1056,203,1152,234.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>   
            
            
                <path fill="#5465FF" fill-opacity="1" d="M0,192L26.7,186.7C53.3,181,107,171,160,170.7C213.3,171,267,181,320,202.7C373.3,224,427,256,480,261.3C533.3,267,587,245,640,218.7C693.3,192,747,160,800,138.7C853.3,117,907,107,960,117.3C1013.3,128,1067,160,1120,154.7C1173.3,149,1227,107,1280,90.7C1333.3,75,1387,85,1413,90.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>

            <div class="olvasas">
                
                    <div class="szoveg">
                        <div>
                            <h1 class="jelenlegi_cim">{cim[cim_index]}</h1>
                            <p class="jelenlegi_szoveg">{szoveg[index]}</p>
                        </div>
                        
                            <img src="icons/document.png" alt="kep">
                    </div>
                    <div class="nyilak">
                        <svg on:click={lapoz_hatra} class="hatra" width="100" height="161" viewBox="0 0 100 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M75 136.588L29.0683 90.6568C23.6439 85.2324 23.6439 76.356 29.0683 70.9316L75 25" stroke="#788BFF" stroke-width="48.5835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg on:click={lapoz_elore} class="elore" width="100" height="161" viewBox="0 0 100 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 136.589L70.9316 90.6573C76.3561 85.2329 76.3561 76.3565 70.9316 70.932L25 25" stroke="#788BFF" stroke-width="48.5839" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                                
                    </div>
                
                <div class="projharomszog">
                    
                    <div class="skala">
                        <h3>Pénz</h3>
                        <div class="slidecontainer penz">
                            <input type="range" min="0" max="100" value="0" class="slider" >
                            <h3 class="p_ertek ertek">0</h3>
                        </div>
                        
                        <h3>Idő</h3>
                        <div class="slidecontainer ido">
                            <input type="range" min="0" max="100" value="0" class="slider" >
                            <h3 class="i_ertek ertek">0</h3>
                        </div>
                        
                        <h3>Hatókör</h3>
                        <div class="slidecontainer hatokor">
                            <input type="range" min="0" max="100" value="0" class="slider">
                            <h3 class="h_ertek ertek">0</h3>
                        </div>
                        <div on:click={ellenorzes} class="ellenorzes">
                            <h3>Ellenőrzés</h3>
                        </div>
                    </div>
                    
                    
                    <svg class="haromszog" width="842" height="740" viewBox="0 0 842 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M386.359 20C401.755 -6.66665 440.245 -6.66667 455.641 20L836.359 679.423C851.755 706.089 832.51 739.423 801.718 739.423H40.2821C9.49004 739.423 -9.75499 706.09 5.64101 679.423L386.359 20Z" fill="#292D32"/>
                        <path d="M453.562 291H384.521C363.808 291 350 301.356 350 325.521V373.85C350 398.014 363.808 408.371 384.521 408.371H453.562C474.275 408.371 488.083 398.014 488.083 373.85V325.521C488.083 301.356 474.275 291 453.562 291ZM362.082 325.521C362.082 313.162 372.162 303.082 384.521 303.082H394.877C397.708 303.082 400.055 305.43 400.055 308.26C400.055 311.091 397.708 313.439 394.877 313.439H384.521C377.893 313.439 372.439 318.893 372.439 325.521V335.877C372.439 338.708 370.091 341.055 367.26 341.055C364.43 341.055 362.082 338.708 362.082 335.877V325.521ZM394.877 396.288H384.521C372.162 396.288 362.082 386.208 362.082 373.85V363.494C362.082 360.663 364.43 358.316 367.26 358.316C370.091 358.316 372.439 360.663 372.439 363.494V373.85C372.439 380.478 377.893 385.932 384.521 385.932H394.877C397.708 385.932 400.055 388.28 400.055 391.11C400.055 393.941 397.708 396.288 394.877 396.288ZM419.042 370.398C407.581 370.398 398.329 361.146 398.329 349.685C398.329 338.224 407.581 328.973 419.042 328.973C430.503 328.973 439.754 338.224 439.754 349.685C439.754 361.146 430.503 370.398 419.042 370.398ZM476.001 373.85C476.001 386.208 465.921 396.288 453.562 396.288H443.206C440.375 396.288 438.028 393.941 438.028 391.11C438.028 388.28 440.375 385.932 443.206 385.932H453.562C460.19 385.932 465.645 380.478 465.645 373.85V363.494C465.645 360.663 467.992 358.316 470.823 358.316C473.654 358.316 476.001 360.663 476.001 363.494V373.85ZM476.001 335.877C476.001 338.708 473.654 341.055 470.823 341.055C467.992 341.055 465.645 338.708 465.645 335.877V325.521C465.645 318.893 460.19 313.439 453.562 313.439H443.206C440.375 313.439 438.028 311.091 438.028 308.26C438.028 305.43 440.375 303.082 443.206 303.082H453.562C465.921 303.082 476.001 313.162 476.001 325.521V335.877Z" fill="#E3E3E3"/>
                        <path d="M321.042 471C283 471 252 502 252 540.042C252 578.084 283 609.083 321.042 609.083C359.084 609.083 390.083 578.084 390.083 540.042C390.083 502 359.084 471 321.042 471ZM351.075 564.689C350.108 566.346 348.382 567.244 346.587 567.244C345.689 567.244 344.792 567.037 343.963 566.485L322.561 553.712C317.244 550.536 313.309 543.563 313.309 537.418V509.111C313.309 506.28 315.656 503.933 318.487 503.933C321.318 503.933 323.665 506.28 323.665 509.111V537.418C323.665 539.904 325.736 543.563 327.877 544.805L349.28 557.578C351.765 559.028 352.594 562.204 351.075 564.689Z" fill="#E3E3E3"/>
                        <path d="M576.922 539.752C574.352 539.752 572.199 537.773 571.921 535.158C570.254 519.612 562.057 505.621 549.416 496.717C547.123 495.091 546.568 491.912 548.165 489.58C549.763 487.248 552.889 486.682 555.181 488.308C570.254 498.978 579.978 515.655 581.992 534.099C582.27 536.925 580.256 539.469 577.477 539.752C577.269 539.752 577.13 539.752 576.922 539.752Z" fill="#E3E3E3"/>
                        <path d="M461.482 540.103C461.343 540.103 461.135 540.103 460.996 540.103C458.217 539.82 456.203 537.276 456.481 534.45C458.356 516.006 467.942 499.329 482.875 488.588C485.098 486.962 488.293 487.528 489.891 489.789C491.489 492.121 490.933 495.301 488.71 496.926C476.207 505.971 468.08 519.963 466.552 535.439C466.275 538.124 464.052 540.103 461.482 540.103Z" fill="#E3E3E3"/>
                        <path d="M546.577 598.89C538.034 603.059 528.865 605.179 519.279 605.179C509.277 605.179 499.761 602.918 490.87 598.325C488.37 597.124 487.397 594.014 488.648 591.47C489.828 588.926 492.885 587.937 495.385 589.138C499.761 591.4 504.415 592.954 509.138 593.873C515.529 595.145 522.058 595.216 528.448 594.085C533.171 593.237 537.825 591.753 542.132 589.633C544.702 588.432 547.758 589.421 548.869 592.036C550.12 594.58 549.147 597.689 546.577 598.89Z" fill="#E3E3E3"/>
                        <path d="M519.209 464C508.443 464 499.621 472.904 499.621 483.928C499.621 494.951 508.373 503.855 519.209 503.855C530.045 503.855 538.797 494.951 538.797 483.928C538.797 472.904 530.045 464 519.209 464Z" fill="#E3E3E3"/>
                        <path d="M470.588 547.805C459.821 547.805 451 556.709 451 567.732C451 578.756 459.752 587.66 470.588 587.66C481.423 587.66 490.175 578.756 490.175 567.732C490.175 556.709 481.354 547.805 470.588 547.805Z" fill="#E3E3E3"/>
                        <path d="M567.14 547.805C556.374 547.805 547.553 556.709 547.553 567.732C547.553 578.756 556.305 587.66 567.14 587.66C577.976 587.66 586.728 578.756 586.728 567.732C586.728 556.709 577.976 547.805 567.14 547.805Z" fill="#E3E3E3"/>
                        </svg>
                        <svg class="pipa "width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="szine" d="M100 0C44.9 0 0 44.9 0 100C0 155.1 44.9 200 100 200C155.1 200 200 155.1 200 100C200 44.9 155.1 0 100 0ZM147.8 77L91.1 133.7C89.7 135.1 87.8 135.9 85.8 135.9C83.8 135.9 81.9 135.1 80.5 133.7L52.2 105.4C49.3 102.5 49.3 97.7 52.2 94.8C55.1 91.9 59.9 91.9 62.8 94.8L85.8 117.8L137.2 66.4C140.1 63.5 144.9 63.5 147.8 66.4C150.7 69.3 150.7 74 147.8 77Z" fill="#292D32"/>
                            
                        </svg>
                            
                </div>
            </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

                        <path fill="#BFD7FF" fill-opacity="1" d="M0,224L26.7,234.7C53.3,245,107,267,160,256C213.3,245,267,203,320,170.7C373.3,139,427,117,480,128C533.3,139,587,181,640,197.3C693.3,213,747,203,800,213.3C853.3,224,907,256,960,234.7C1013.3,213,1067,139,1120,122.7C1173.3,107,1227,149,1280,144C1333.3,139,1387,85,1413,58.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>



                    <path fill="#5465FF" fill-opacity="1" d="M0,64L26.7,106.7C53.3,149,107,235,160,266.7C213.3,299,267,277,320,250.7C373.3,224,427,192,480,186.7C533.3,181,587,203,640,208C693.3,213,747,203,800,181.3C853.3,160,907,128,960,144C1013.3,160,1067,224,1120,234.7C1173.3,245,1227,203,1280,160C1333.3,117,1387,75,1413,53.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
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

    .ellenorzes{
        background-color: #BFD7FF;
        margin-top:2rem;
        padding: 5% 10% 5% 10%;
        border-radius: 20px;
        box-shadow: #5465FF 5px 5px 5px ;


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
        background-color:#E3E3E3 ;
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
        background-color: #788BFF;
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
  background-color: #E3E3E3;
  border-radius: 50%;
  border: 2px solid #E3E3E3;
  box-shadow: -407px 0 0 400px #E3E3E3;
}

.slider::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #E3E3E3;
  border-radius: 50%;
  border: 1px solid #E3E3E3;
  box-shadow: -407px 0 0 400px #E3E3E3;
}
    .main{

        border-color: #5465FF;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .egesz{
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
    .kor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        position: absolute;
        border-radius: 100%;
        text-align: center;
        font-size: 150%;
    
    }

    .kor1{

        background-color:#BFD7FF ;
        width: 30rem;
        height: 30rem;

    }
    .kor2{
        background-color:#788BFF ;
        width: 25rem;
        height: 25rem;

    }
    .kor3{
        
        background-color:#9BB1FF ;
        width: 32rem;
        height: 32rem;

    }
    .kor4{
        background-color:#E3E3E3 ;
        width: 25rem;
        height: 25rem;

        
        

    }
    .kor5{
        background-color:#BFD7FF ;
        width: 32rem;
        height: 32rem;

    }
    .kor6{
        background-color:#788BFF ;
        width: 35rem;
        height: 35rem;

    }
    .kor7{
        background-color:#BFD7FF ;
        width: 25rem;
        height: 25rem;

    }
    .ph{
        background-color: #788BFF;
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
    .ph svg{
        transform: translate(0%,-10%);
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
  
    .nyilak{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
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
    @media screen and (min-width: 300px){
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
        width: 30rem;
        height: 30rem;
        top:5%;
        right: 70%;
        z-index: 4;
        
    }
    .kor2{
        background-color:#788BFF ;
        width: 25rem;
        height: 25rem;
        top:-3%;
        right: 52%;
        z-index: 5;
    }
    .kor3{
        
        background-color:#9BB1FF ;
        width: 32rem;
        height: 32rem;
        top:18%;
        right: 47%;
        z-index: 3;
    }
    .kor4{
        background-color:#E3E3E3 ;
        width: 25rem;
        height: 25rem;
        top:18%;
        right: 31%;
        
        
        z-index: 2;
    }
    .kor5{
        background-color:#BFD7FF ;
        width: 32rem;
        height: 32rem;
        top:3%;
        right: 9%;
        
        z-index: 2;
    }
    .kor6{
        background-color:#788BFF ;
        width: 35rem;
        height: 35rem;
        top:35%;
        right: 12%;
        
        z-index: 1;
    }
    .kor7{
        background-color:#BFD7FF ;
        width: 25rem;
        height: 25rem;
        top:52%;
        right: 40%;
        
        z-index: 0;
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
        .cim h1{
            font-size: 13rem;
        }
    }
    @media screen and (max-width: 950px){
        .kor{
            transform: scale(.55) translate(55%,0%);
            font-size: 200%;
        }
        .cim h1{
            font-size: 12rem;
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
            transform: scale(.48) translate(63%,0%);
            font-size: 200%;
        }
        .cim h1{
            font-size: 10rem;
        }
    }
    @media screen and (max-width: 760px){
        .kor{
            transform: scale(.450) translate(66%,0%);
            font-size: 200%;
        }
    }
    @media screen and (max-width: 690px){
        .kor{
            transform: scale(.44) translate(70%,0%);
        }
        
    }
    @media screen and (max-width: 660px){
        .kor{
            transform: scale(.430) translate(74%,0%);
        }
        
    }
    @media screen and (max-width: 630px){
        .kor{
            transform: scale(.420) translate(78%,0%);
        }
        
    }
    @media screen and (max-width: 610px){
        .kor{
            transform: scale(.410) translate(80%,0%);
        }
        
    }
    @media screen and (max-width: 590px){
        .kor{
            top:auto;
            right: auto;
            bottom: auto;
            left: auto;
        }
    }
    
    .kor:hover{
        animation: kiemeles 4s infinite;
    }
    .ph:hover{
        animation: kiemeles 4s infinite;
    }
    @keyframes kiemeles{

        100%{

            z-index: 100;
            transform: scale(1.1);
        }
    }
</style>

<script lang="ts">
	import { set_data } from "svelte/internal";
	import Navbar from "../../components/Navbar.svelte";
    import { onMount } from 'svelte';
    let hatra:any;
    let elore:any;
    let olvasas:any;
    let projharomszog:any;
    let szovegek: any;
    let nyilak:any;
    let slider: any;
    let p_ertek;
    let i_ertek;
    let h_ertek;
    let pipa: any;
    let szine: any;
    let penz: any;
    let ido: any;
    let hatokor: any;
    let kapcsolas_1= false;
    let kapcsolas_2= false;
    let kapcsolas_3= false;
    let kapcsolas_4= false;
    let kapcsolas_5= false;
    let kapcsolas_6= false;
    let kapcsolas_7= false;
    let kapcsolas_H= false;
    let p: any;
    let i:any;
    let h: any;
    

    onMount(() => {
        hatra= document.querySelector('.hatra');
        elore= document.querySelector('.elore');
        olvasas= document.querySelector('.olvasas');
        projharomszog = document.querySelector('.projharomszog');
        szovegek = document.querySelector('.szoveg');
        nyilak = document.querySelector('.nyilak');
        slider= document.querySelector('.slider')  ;
        penz= document.querySelector('.penz input');
        ido= document.querySelector('.ido input');
        hatokor= document.querySelector('.hatokor input');
        p_ertek= document.querySelector('.p_ertek');
        i_ertek=  document.querySelector('.i_ertek');
        h_ertek=  document.querySelector('.h_ertek');

        pipa= document.querySelector('pipa');
        szine=document.querySelector('.szine');
        penz.oninput =(() =>{
            let ujertek= penz.value;
            p_ertek.textContent = ujertek;

        })

        ido.oninput =(() =>{
            let ujertek= ido.value;
            i_ertek.textContent = ujertek;
        })

        hatokor.oninput =(() =>{
            let ujertek= hatokor.value;
            h_ertek.textContent = ujertek;
        })
        
        olvasas.style.display="none";
        projharomszog.style.display="none";
        
        
    });

    
    let cim_index=0;
    let index=0;
    
    
    let cim=["A projekt menedzsment(1.)","Szervezet(2.)","Projektfolyamatok, fázisok(3.)","A projekt működési rendje(4.)","IT projekt megközelítés(5.)","Összegzés(6.)","Mellékletek(7.)"];
    let szoveg=["Segítséget nyújt a szervezetek projektjeinek, hatékony menedzselésében, enélkül olyan lenne a projekt, mint egy Lego szett.  Megfelelő utasítás eljárás nélkül káosz lenne a vége. A mi útmutatónk tehát jelenesetben az eljárásrend, taglalja, hogy a költségvetés alapelveit típustól független, az egyes szakszavakat a projektmenedzsment témakörében(terminológia), és a folyamatok alkalmazását."
    
    ,"Ismét gondoljunk a Lego szettekre, vannak különlegesebb darabok, amelyek a konkrét instrukciók(lépések) mellett kisebb információval akár tájékoztatással vannak ellátva. Az esetünkben a különleges darabok az államigazgatási projektek főként és ezek jellemzőit bővítik a hazai sajátosságok, törvények.","A módszertan definíciója: \nA vízesés alapú, avagy szekvenciális modell, fix mérföldkövekhez kapcsolódik (itt gondolhatunk akár kedvenc játékunkra, hiszen ott is gyakran találkozhatunk ilyenekkel, mondjuk, ha egy nagyobb szintet érünk el, vagy hosszabb ideje játszunk)."
    
    ,"A projektháromszög\n Nagyon fontos, hogy ne ijedjünk meg rögtön a hallatán ez nem valami szekta jelképe!A menedzsment fő tényezőit és a köztük lévő összefüggést prezentálja nekünk. A következők tehát, az idő, a költség, a hatókör és a minőség. A fontosságuk esetenként változik, gondoljunk ezúttal egy autóra és azok kialakítására, ha változtatunk a motor pozícióján változtatni kell a vázon, ami esetenként nagyobb költségvetést igényel (mind ez attól függ, hogy milyen célra születik meg az autó). A lényeg ezúttal, hogy ha az egyik tényező változik akkor a többi is. Működését gyakorolhatjuk az oldalon hiszen külön szántunk neki egy lépést."
    
    ,"Általános felépítése\n Tegyük fel, hogy ismét egy Lego szettel van dolgunk méghozzá egy hatalmassal és összerakásához csapatokat szeretnénk kialakítani, hogy a szett megfelelően legyen kezelve és összerakva. A szervezetek egységeit és kulcspozícióit már a tervezés során össze kell raknunk. Két szintre tudunk kialakítani szervezeteket. "
    
    ,"Stratégai szint\n Ezen a szinten két nagy szervezeti egység található, az egyik a Magas Szintű Támogató Testület (MTT) más nevén Projekt Felügyelő Bizottság (PFB), és a Projekt Irányító Bizottság (PIB). "
    
    ,"MTT\n Ők azok, akik képesek a projekt környezetét befolyásolni, ők hozzák a legfontosabb döntéseket. (Legalább egy főből kell állnia)."
    
    ,"Projekt szponzor\n A példa kedvéért, mondjuk azt, hogy a Lego szett az ő kérésére, rendelésére készül, így ő biztosítja a forrásokat és a támogatásokat. Vezetői szerepe végett ő is képes a projektháromszög környezetét befolyásolni."
    
    ,"PIB\nA PIB gondoskodik arról, hogy a projekt kijelölt keretein belül (költség, idő, terjedelem) a szükséges döntések megszülessenek, a megfelelő erőforrások (akár a lego darabok) kiosztásra kerüljenek, illetve felügyeletet gyakorol a projekt operatív szintje felett."

    ,"Operatív szint\n Ezen a szinten történik a projekt megvalósítása (lego összerakása)."
    
    ,"Tisztségiselők\nA projekt menedzseléséért felelősek. A következők tehát, a projektigazgatók, projektvezetők, szakmai vezetők, munkacsoport-vezetők, projekt-koordinátorok stb."    
        
    ,"Projekt munkatársai\nMunkaidejük nagyrészét a projekt lebonyolításával töltik (akik konkrétan összerakják a legot), ide tartoznak a munkacsoporttagok és a projektasszisztensek."
        
    ,"Támogató szakértők\nAzok a kollégák, akik esetenként szakértői feladatokat látnak el a projektben."
        
    ,"Üzleti partnerek\nAzok a külső szállítók, akik a projekt lebonyolításában segítenek. Méghozzá beszerzőként, tanácsadóként, minőségbiztosítóként, vannak leginkább jelen."
    
    ,"Projektszponzor\nA feladatot olyan személynek kell ellátnia, aki megfelelő szintű hatáskörrel bír, és támogatni tudja a megvalósítást. Tehát az ő feladata, hogy támogassa a projektet, összeállítsa a PIB tagjait, együttműködések fenntartása és a projektben való információáramlás biztosítása.  A PIB működését felügyeli."
    
    ,"Projekt Irányító Bizottság (PIB)\nAmi a projektirányítást illeti, az ő feladatuk dönteni a projekt céljairól, terjedelméről, ütemezéséről, illetve az ezeket befolyásoló tényezőkről ők döntenek. Ők határozzák meg a projekt szervezet működési elveit, és az ehhez szükséges erőforrásokat biztosítja. Ők felügyelik a projektvezetést."
    
    ,"Projektvezető\nŐ az, aki a meghatározott projektháromszög elvárásait korlátait betartatja. Tehet javaslatot a projektet érintő tervekre és változásokra, amiket később a PIB bírál majd. Térjünk vissza egy pillanatra a Lego-s példánkra, az egyszerűség kedvéért, tegyük fel, hogy már megvan melyik szettet választottuk, hogy milyen úton jutunk hozzá, és milyen feltételek szükségesek hozzá, kell egy ember, aki konkrétan összeállítja a szetten dolgozó csapatokat(projekttagokat) majd ellenőrzi a munkájukat, ahhoz, hogy minden jól menjen szükséges, hogy megfelelő dokumentációt vezessen munkát és költségvetést illetően. Illetve megkell teremtenie a megfelelő kommunikációt a csapatok közt és a csapatok és maga közt. Amennyiben ezek nem történnek meg az elkészítés közben olyan problémák merülhetnek fel, amelyek azt eredményezik, hogy a Legonk összeesik"

    
    ,"Szakmai vezető\n"

    ,"\n"
    
    ,"\n"
    
    ,"\n"
    
    ,"A fejezetek végére értél, gratulálunk, reméljük segíthettünk!"];



    function elso(){
        if(kapcsolas_1==false){
            index=4;
            cim_index=1;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
            projharomszog.style.display="none";
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
            projharomszog.style.display="none";
        }
        else if(kapcsolas_2==true){
            olvasas.style.display="none";
        }
        kapcsolas_2=!kapcsolas_2;

    }
    function harmadik(){
        if(kapcsolas_3==false){
            cim_index=2
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
            projharomszog.style.display="none";
        }

        else if(kapcsolas_3==true){
            olvasas.style.display="none";
        }
        kapcsolas_3=!kapcsolas_3;
    }
    function negyedik(){
        if(kapcsolas_4==false){
            cim_index=3;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
            projharomszog.style.display="none";
        }

        else if(kapcsolas_4==true){
            olvasas.style.display="none";

        }
        kapcsolas_4=!kapcsolas_4;
    }
    function otodik(){
        if(kapcsolas_5==false){
            cim_index=4;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
            projharomszog.style.display="none";
        }

        else if(kapcsolas_5==true){
            olvasas.style.display="none";
        }
        kapcsolas_5=!kapcsolas_5;
    }
    function hatodik(){
        if(kapcsolas_6==false){        
            cim_index=5;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
            projharomszog.style.display="none";
        }

        else if(kapcsolas_6==true){
            olvasas.style.display="none";
        }
        kapcsolas_6=!kapcsolas_6;
    }
    function hetedik(){
        if(kapcsolas_7==false){
            cim_index=6;
            olvasas.style.display="flex";
            szovegek.style.display="flex";
            nyilak.style.display="flex";
            projharomszog.style.display="none";
        }

        else if(kapcsolas_7==true){
            olvasas.style.display="none";
        }
        kapcsolas_7=!kapcsolas_7;
    }
    function haromszog(){
            if(kapcsolas_H==false){
                olvasas.style.display="flex";
                szovegek.style.display="none";
                nyilak.style.display="none";
                projharomszog.style.display='flex';
                
            }
            else if(kapcsolas_H==true){
                olvasas.style.display="none";
                szovegek.style.display="flex";
                nyilak.style.display="flex";
            }
            kapcsolas_H=!kapcsolas_H;


    }
    function ellenorzes(){
        
        i= (document.querySelector('.i_ertek')as any).innerHTML;
        h= (document.querySelector('.h_ertek')as any).innerHTML;
        p=(document.querySelector('.p_ertek')as any).innerHTML;

        if(p==0|| i==0 || h==0){
            szine.style.fill="red";
        }
                
        else if(p==h && h==i && ((p==i  && p <=80 && i <=80)||((p-i)<20) || (i-p<20))){
            szine.style.fill="green";
        }
        else if((p>80&& i>80 )&&h<45){
            szine.style.fill="orange";
        }
        else if((p>80&& i>80 )&&h<60){
            szine.style.fill="yellow";
        }

        else if(p>80&& i>80 ){
            szine.style.fill="#c6dd0e";
        }
        else if((p-h)>=40)
        {
            szine.style.fill="orange";
        }
        else if((p-h)>=60)
        {
            szine.style.fill="red";
        }

        else if((p-h)>=20){
            szine.style.fill="yellow";
        }
        else if((h-p)>=5){
            szine.style.fill="green";
        }
        else if((h-i)>40){
            szine.style.fill="green";
        }

        

    }


    function lapoz_elore(){
        if (index != szoveg.length - 1){
           index++;
            
        }
        else{
            index=szoveg.length-1;
        }
    }
    function lapoz_hatra(){
        if (index!=0){
            index--;
            
        }

    }

</script>
