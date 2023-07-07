import { Level } from "../models/level.model";
import { Question } from "../models/question.model";
import { QuizResult } from "../models/quiz-result.model";

export function calcAverageScore(results: QuizResult[]): number {
    if (results.length === 0) return 0;
    const sum = results.reduce((acc, item) => acc + item.score, 0);
    return sum / results.length
}

export function calcCorrectCount(questions: Question[], answers: number[]): number {
    let res = 0;

    for (let index = 0; index < questions.length; index++) {
        const question = questions[index];
        const answer = answers[index];
        if (question.answer === answer) res++;
    }

    return res;
}

export function calcLevel(results: QuizResult[]): Level {
    const proResults = results.filter(res => res.level !== 'Beginner');
    const avg = calcAverageScore(results);

    if ((proResults.length >= 3) && (avg >= 80)) return 'Advanced';
    if ((results.length >= 3) && (avg >= 60)) return 'Intermediate';
    return 'Beginner';
}