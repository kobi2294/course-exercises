import { Inject, Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { Level } from '../models/level.model';
import { Question } from '../models/question.model';
import { getGeneratorForLevel } from '../helpers/question-generator';
import { calcCorrectCount } from '../helpers/scores';
import { NUMBER_OF_QUESTIONS_TOKEN } from '../tokens/number-of-questions.token';
import { QUESTION_GENERATOR_TOKEN } from '../tokens/question-generator.token';

@Injectable()
export class ExamService {
  constructor(
    private playerService: PlayerService,
    @Inject(NUMBER_OF_QUESTIONS_TOKEN) private numberOfQuestions: number, 
    @Inject(QUESTION_GENERATOR_TOKEN) private generator: () => Question
    ) { }

  private _answers: number[] = [];
  private _level: Level = this.playerService.level;
  private _questions: Question[] = this.generateQuestions();

  get currentQuestion() { return this._questions[this._answers.length]}
  get questionsCount() { return this._questions.length}
  get currentQuestionIndex() { return this._answers.length}

  generateQuestions(): Question[] {
    const questions: Question[] = [];

    for (let index = 0; index < this.numberOfQuestions; index++) {
      questions.push(this.generator());
    }

    return questions;
  }

  answerCurrentQuestion(answer: number) {
    this._answers.push(answer);
    if (this._answers.length === this._questions.length) {
      // exam is completed
      const correct = calcCorrectCount(this._questions, this._answers);
      this.playerService.completeExam(this._level, correct, this._questions.length - correct);
    }
  }

}
