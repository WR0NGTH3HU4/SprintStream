<main>
    <section class="main">
        <ClickerGenerator elemShape="circle" shapes="{shapes}" on:shapeClick={shapeClick} />
    </section>
    <section class="wavy">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="var(--1)" fill-opacity="1" d="M0,32L26.7,48C53.3,64,107,96,160,128C213.3,160,267,192,320,176C373.3,160,427,96,480,112C533.3,128,587,224,640,261.3C693.3,299,747,277,800,224C853.3,171,907,85,960,53.3C1013.3,21,1067,43,1120,80C1173.3,117,1227,171,1280,176C1333.3,181,1387,139,1413,117.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            <path fill="var(--0)" fill-opacity="1" d="M0,288L26.7,245.3C53.3,203,107,117,160,112C213.3,107,267,181,320,218.7C373.3,256,427,256,480,245.3C533.3,235,587,213,640,176C693.3,139,747,85,800,74.7C853.3,64,907,96,960,122.7C1013.3,149,1067,171,1120,197.3C1173.3,224,1227,256,1280,256C1333.3,256,1387,224,1413,208L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
        </svg>
        <ProfileDisplay profiles={rolunk} selected={selectedProfileIndex}/>
    </section>
</main>

<style lang="scss">
    @import '../../scss/palette.scss';

    section {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    section:nth-child(odd) {
        background-color: var(--0);
        color: white;
        padding: 1rem;
    }

    .main {
        justify-content: center;
    }

    .main > *:first-child {
        flex: 1;
    }

    .wavy {
        flex: 1;

        & > :global(*:nth-child(2)) {
            justify-self: center;
            align-self: center;
            margin: auto;
        }
    }
</style>

<script lang="ts">
	import ClickerGenerator from "../../components/ClickerGenerator.svelte";
	import type { Profile } from "../../util/model/Profile";
	import ProfileDisplay from "../../components/ProfileDisplay.svelte";

    let selectedProfileIndex = 0;

    function shapeClick(event: any) {
        let shapeId = event.detail.id;
        selectedProfileIndex = Number(shapeId);
    }

    const shapes = [
        {
            id: "0",
            backgroundImage: 'rolunk/csoka_andras.jpg',
        },
        {
            id: "1",
            backgroundImage: 'rolunk/csaszar_andras.jpg',
        },
        {
            id: "2",
            backgroundImage: 'rolunk/kovago_levente.jpg',
        },
        {
            id: "3",
            backgroundImage: 'rolunk/kulimak_mate.jpg',
        },
        {
            id: "4",
            backgroundImage: 'rolunk/tatrai_dominik.jpg',
        },
    ];

    const rolunk: Profile[] = [
        {
            nev: "Csóka András",
            leiras: "Sziasztok! Én Csóka András vagyok az weboldalnak a quiz részét csináltam én kisebb nagyobb segítségekkel. Szabadidőmben is szívesen foglalkozok programozással és a tudásom bővítésével. Nagyon könnyen beilleszkedek és alkalmazkodok. Az oldal készítése alatt a Bajai SZC Türr István Technikumba járok ahol a 11.a osztály tagja vagyok.",
            kep: "rolunk/csoka_andras.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/csokaandras",
                },
            ],
        },
        {
            nev: "Császár András",
            leiras: "halo csaszar andras vagyok, szereny es okos es rendkivul ferfias. turros tanulo vagyok es szamitasaim szerint nem vagyok rossz programozasbol (napi 10 orakat programozok fyi). a projekt nelkulem plain html cssben lenne es github pagesen lenne hostolva",
            kep: "rolunk/csaszar_andras.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/csandrisTurr",
                },
            ],
        },
        {
            nev: "Kővágó Levente",
            leiras: "Hello! Kővágó Leventének vagyok. Baján, a Türr Istán technikum 11.a osztályos tanulója vagyok szoftver fejlesztői ágazaton. Szerbiában egy kis faluban élek, Bezdánban. Versenyszinten kajakozok és napi szinten edzek. A projektben az én feladatom volt a Scrum aloldal megtervezése és megvalósítása, illetve a képek/ikonok keresése. Kisebb nehézségek akadtak a reszponzivításal, illetve a gombok pozicionálásával, de sikeresen vettem az akadályt és megoldottam kisebb segítségekkel.",
            kep: "rolunk/kovago_levente.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/KovagoLevente",
                },
                {
                    tipus: "instagram",
                    link: "https://instagram.com/_levente_k",
                },
            ],
        },
        {
            nev: "Kulimák Máté",
            leiras: "Sziasztok! Kulimák Máté vagyok, vaskúti lakos, a Bajai SZC Türr István Technikum 11.A osztályos tanulója. A projektben leginkább a kreatív feladatokban vettem részt illetve a Jirát kezeltem illetve a \"rólunk\" oldalt én kezdtem el, viszont ezt a PowerPoint miatt félbe kellett hagynom. Érdekesnek valamint izgalmasnak tartom az informatikát és remélem, hogy ezen a területen tudok majd elhelyezkedni.",
            kep: "rolunk/kulimak_mate.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/WR0NGTH3HU4",
                },
                {
                    tipus: "twitter",
                    link: "https://twitter.com/holvanmate",
                },
                {
                    tipus: "instagram",
                    link: "https://instagram.com/wr0ngth3hu4",
                },
            ],
        },
        {
            nev: "Tátrai Dominik Oszkár",
            leiras: "Sziasztok Tátrai Dominik vagyok! Röviden magamról annyit mondanék, hogy szabadidőmben szívesen tervezgetek, tanulok új dolgokat vagy kezdek számomra kreatív projektbe ezek leginkább zenei területeken merülnek ki, viszonylag sok stílusra vevő vagyok, vagy sokhoz alkalmazkodni tudok ha úgy van. Úgy gondolom hogy a hobbijaim segítenek nekem, hogy komolyabb területeken is hasznossá tudjak válni, akárcsak ebben a projektben, a többi csapattársammal egyetemben. Jelenleg a Bajai SZC Türr István Technikumba járok ahol a 11.a osztály tagja vagyok. A feladatom az oldalt illetően a \"Vízesés modell\" aloldal elkészítése volt, felmerültek nehézségek az oldal készítése közben, de a rugalmas csapatmunkánknak köszönhetően idővel mindenre sort tudtunk keríteni és megoldani a problémákat.",
            kep: "rolunk/tatrai_dominik.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/TatraiDominik",
                },
                {
                    tipus: "instagram",
                    link: "https://instagram.com/dominiktatrai",
                },
            ],
        },
    ];
</script>
