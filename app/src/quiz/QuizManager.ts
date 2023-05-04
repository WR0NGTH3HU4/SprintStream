import { quizQuestions, type QuizQuestion } from "./QuizQuestions";

type QuizType = 'scrum' | 'vizeses';

export class QuestionManager {
    private generatedIndexes: number[] = [];

    constructor(private readonly typ: QuizType) {}

    public async randomQuestion(): Promise<QuizQuestion> {
        let trueRandomIndex: number | null = null; 

        do {
            const randomIndex = Math.floor(Math.random() * quizQuestions[this.typ as string].length);

            if (!this.generatedIndexes.includes(randomIndex)) {
                trueRandomIndex = randomIndex;
            }
        } while (trueRandomIndex == null)
        
        this.generatedIndexes.push(trueRandomIndex);
        return quizQuestions[this.typ as string][trueRandomIndex];
    }

    public async randomQuestions(count: number): Promise<QuizQuestion[]> {
        const questions: QuizQuestion[] = [];

        for (let i = 0; i < count; i++) {
            questions.push(await this.randomQuestion());
        }

        this.clearGeneratedIndexes();
        return questions;
    }

    public clearGeneratedIndexes() {
        this.generatedIndexes = [];
    }
}