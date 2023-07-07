import { Level } from "./level.model";

export interface QuizResult {
    date: Date;
    level: Level;
    correctAnswers: number;
    totalQuestions: number;
    score: number // 1 .. 100
}