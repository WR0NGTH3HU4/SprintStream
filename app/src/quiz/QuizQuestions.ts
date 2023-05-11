export type QuizQuestion = {
    kerdes: string,
    a?: string,
    b?: string,
    c?: string,
    valasz: string
};

export const quizQuestions: {[keretrendszer: string]: QuizQuestion[]} = {
    scrum: [
        {
            kerdes: "Mi a scrum?",
            a: "A) egy programnyelv",
            b: "B) egy projekt megvalósítási keretrendszer",
            c: "C) egy szakma",
            valasz: "b"
        },{
            kerdes: "Sprint retrospektív alkalmával milyen kérdésekre keressük a választ?",
            a: "A) mivel haladtunk",
            b: "B) milyen problémák adódtak",
            c: "C) mennyi a költség",
            valasz: "a"
        },
        {
            kerdes: "Melyik nem jellemző a scrumra?",
            a: "A) A projekt csapata folyamatosan javítja és finomítja a munkafolyamatot a visszajelzések.",
            b: "B) Együttműködést és folyamatos fejlesztést támogat.",
            c: "C) Ha nincsenek meghatározva pontosan a célok akkor semmiképp sem fog jól működni a megvalósítás.",
            valasz: "a"
        },
        {
            kerdes: "Melyik nem Scrum esemény?",
            a: "A) Sprint Áttekintés",
            b: "B) Napi Scrum-megbeszélés",
            c: "C) Scrum Master választás",
            valasz: "c"
        },
        {
            kerdes: "A napi Scrum egy 45 perces esemény a Scrum csapat fejlesztői számára.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
        {
            kerdes: "A termék backlog elemek priorizálása a Scrum master feladata.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
        {
            kerdes: "Milyen hosszú lehet a sprint demó egy hónapos sprint esetén?",
            a: "A) Maximum 2 óra",
            b: "B) Maximum 1 óra",
            c: "C) Maximum 4 óra",
            valasz: "c"
        },
        {
            kerdes: "A Scrum három konkrét szerepkört határoz meg a Scrum csapatban. Melyek ezek?",
            a: "A) Fejlesztőcsapat, Termékgazda, Scrum Master",
            b: "B) Projektvezető, Projektszponzor, Fejlesztőcsapat",
            c: "C) Fejlesztőcsapat, Projektszponzor, Scrum Master",
            valasz: "a"
        },
        {
            kerdes: "A Scrum master feladata annak biztosítása, hogy az összes Scrum esemény lezajlik.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
        {
            kerdes: "Ki állítja össze a sprint backlogot?",
            a: "A) A terméktulajdonos",
            b: "B) A csapat",
            c: "C) A Scrum Master",
            valasz: "a"
        },
        {
            kerdes: "A kész meghatározása a növekedés állapotának hivatalos leírása, amikor az megfelel a termékre vonatkozó minőségi követelményeknek.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "A termék backlog elemek rendezett listája, amely azokat a fejlesztéseket veszi végig, amelyekre szükség van, hogy javítsák a terméket vagy növeljék annak érékét.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "Sprint tervezés alkalmával a terméktulajdonossal folytatott megbeszélés során a fejlesztők kiválasztják a termék backlogból azokat az elemeket, amelyek beépülnek a jelenlegi sprintbe.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "A sprint retrospektívvel kezdjük a sprintet.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "A sprint tervezés hossza legfeljebb 4 óra legyen egy 2 hetet felölelő sprint esetében.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "A sprint demó (sprint review) célja a sprint eredményeinek ellenőrzése.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "A fejlesztők minden egyes kiválasztott termék backlog-elemhez megtervezik a kész definíciónak megfelelő növekmény létrehozásához szükséges munkát.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "Kizárólag a Scrum master jogosult egy sprint lemondására.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "b"
        },
		{
            kerdes: "A terméktulajdonos felelős a termék backlog hatékony kezeléséért is.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "b"
        },
		{
            kerdes: "Melyik nem Scrum dokumentum?",
            a: "A) Sprint teendőlistája (Sprint Backlog)",
            b: "B) Sprint Áttekintés (Sprint Review / Demó)",
            c: "C) Növekmény (Increment)",
            valasz: "b"
        },
		{
            kerdes: "A Scrum empirikus és lean gondolkodáson alapszik.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "Az ideális Scrum csapat legalább 12 tagból áll.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "b"
        },
		{
            kerdes: "A termék backlog szükség szerint finomítható.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "a"
        },
		{
            kerdes: "A napi Scrumon kívül a fejlesztők már nem kommunikálhatnak egymással.",
            a: "A) Igaz",
            b: "B) Hamis",
            valasz: "b"
        },
		{
            kerdes: "Mit jelent a transzparencia?",
            a: "A) átláthatóság",
            b: "B) változtathatóság",
            c: "C) plakáton bemutatható",
            valasz: "a"
        },
		{
            kerdes: "Mit jelent az empirikus gondolkodás?",
            a: "A) racionális",
            b: "B) birodalmi gondolkodás",
            c: "C) tapasztalatokra alapszik",
            valasz: "a"
        },
		{
            kerdes: "A sprint során csökkenhet a minőség.",
            a: "A) Hamis",
            b: "B) Igaz",
            valasz: "b"
        },
    ],
    vizeses: [
        {
            kerdes: " ",
            a: "A) ",
            b: "B) ",
            c: "C) ",
            valasz: "a"
        },
    ],
};

/*
{
    kerdes: " ",
    a: "A) ",
    b: "B) ",
    c: "C) ",
    valasz: "a"
},
*/
