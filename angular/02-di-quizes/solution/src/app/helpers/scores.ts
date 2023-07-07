import { Level } from "../models/level.model";
import { QuizResult } from "../models/quiz-result.model";

export function calculateLevel(results: QuizResult[]): Level {
    const proResults = results.filter(res => res.level !== 'Beginner');
    const avg = getAverageScore(results);

    if ((proResults.length >= 3) && (avg >= 80)) return 'Advanced';
    if ((results.length >= 3) && (avg >= 60)) return 'Intermediate';
    return 'Beginner';
}

export function getAverageScore(results: QuizResult[]): number {
    if (results.length === 0) return 0;
    const sum = results.reduce((acc, item) => acc + item.score, 0);
    return sum / results.length
}