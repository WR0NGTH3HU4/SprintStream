export type QuizQuestion = {
    kerdes: string,
    a: string,
    b: string,
    c: string,
    valasz: string
};

export const quizQuestions: {[fasz: string]: QuizQuestion[]} = {
    scrum: [
        {
            kerdes: "Mi a scrum?",
            a: "A) egy sajtfajta",
            b: "B) egy projekt megvalósítási keretrendszer",
            c: "C) egy francia ételkülönlegesség",
            valasz: "b"
        },{
            kerdes: "mi a fene",
            a: "igen",
            b: "nem",
            c: "nemtom",
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
            kerdes: "sajt vagy?",
            a: "blub",
            b: "asked",
            c: "szia",
            valasz: "a"
        },
        {
            kerdes: "5",
            a: "a",
            b: "b",
            c: "c",
            valasz: "a"
        },
        {
            kerdes: "6",
            a: "a",
            b: "b",
            c: "c",
            valasz: "a"
        },
        {
            kerdes: "7",
            a: "a",
            b: "b",
            c: "c",
            valasz: "a"
        },
        {
            kerdes: "8",
            a: "a",
            b: "b",
            c: "c",
            valasz: "a"
        },
        {
            kerdes: "9",
            a: "a",
            b: "b",
            c: "c",
            valasz: "a"
        },
        {
            kerdes: "10",
            a: "a",
            b: "b",
            c: "c",
            valasz: "a"
        },
        {
            kerdes: "11",
            a: "a",
            b: "b",
            c: "c",
            valasz: "a"
        },
    ],
    vizeses: [
        
    ],
};
