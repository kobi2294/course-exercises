import { Injectable } from '@angular/core';
import { QuizResult } from '../models/quiz-result.model';
import { Level } from '../models/level.model';
import { calcAverageScore, calcLevel } from '../helpers/scores';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() { }

  private _pastResults: QuizResult[] = [];
  get pastResults() { return this._pastResults}

  private _isTakingExam: boolean = false;
  get isTakingExam() { return this._isTakingExam}

  private _scoreAverage: number = 0;
  get scoreAverage() { return this._scoreAverage}

  private _level: Level = 'Beginner';
  get level() {return this._level}

  startExam() {
    this._isTakingExam = true;
  }

  completeExam(level: Level, correct: number, wrong: number) {
    const res: QuizResult = {
      date: new Date(), 
      correctAnswers: correct, 
      totalQuestions: correct + wrong, 
      score: Math.round(100 * correct / (correct + wrong)), 
      level: level
    }

    this._pastResults.push(res);
    this._scoreAverage = calcAverageScore(this._pastResults);
    this._level = calcLevel(this._pastResults);
    this._isTakingExam = false;
  }
}
