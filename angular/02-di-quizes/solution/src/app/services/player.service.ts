import { Injectable } from '@angular/core';
import { QuizResult } from '../models/quiz-result.model';
import { calculateLevel, getAverageScore } from '../helpers/scores';
import { Level } from '../models/level.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  private _pastResults: QuizResult[] = [];
  get pastResults() {
    return this._pastResults;
  }

  private _isTakingExam: boolean = false;
  get isTakingExam() {
    return this._isTakingExam;
  }

  private _scoresAverage: number = 0;
  get scoresAverage() {
    return this._scoresAverage;
  }

  private _level: Level = 'Beginner';
  get level() {
    return this._level;
  }

  startExam() {
    this._isTakingExam = true;
  }

  completeExam(level: Level, correct: number, wrong: number) {
    const res: QuizResult = {
      date: new Date(), 
      correctAnswers: correct, 
      totalQuestions: correct + wrong, 
      score: Math.round(correct / (correct + wrong)), 
      level: level      
    }

    this._pastResults.push(res);
    this._scoresAverage = getAverageScore(this._pastResults);
    this._level = calculateLevel(this._pastResults);
    this._isTakingExam = false;
  }
}
