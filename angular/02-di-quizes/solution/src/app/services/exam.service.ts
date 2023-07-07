import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { PlayerService } from './player.service';
import { generateAdvacnedQuestion, generateBeginnerQuestion, generateIntermediateQuestion } from '../helpers/question-generators';
import { Level } from '../models/level.model';
import { calculateCorrectCount } from '../helpers/scores';

@Injectable()
export class ExamService {
  private _answers: number[] = [];
  private _level: Level = this.playerService.level;
  private _questions: Question[] = this.generateQuestions();

  get currentQuestion() { return this._questions[this._answers.length]};
  get questionsCount() { return this._questions.length}
  get currentQuestionIndex() { return this._answers.length}


  constructor(
    private playerService: PlayerService) {}

  getGenerator(): () => Question {
    switch (this._level) {
      case 'Beginner':
        return generateBeginnerQuestion;
      case 'Intermediate':
        return generateIntermediateQuestion;
      case 'Advanced':
        return generateAdvacnedQuestion;
    }
  }

  generateQuestions() : Question[] {
    const questions: Question[] = [];
    const  generator = this.getGenerator();

    for (let index = 0; index < 10; index++) {
      questions.push(generator());
    }

    return questions;
  }

  answerCurrentQuestion(answer: number) {
    this._answers.push(answer);
    if (this._answers.length === this._questions.length) {
      // exam is completed
      const correct = calculateCorrectCount(this._questions, this._answers);
      this.playerService.completeExam(this._level, correct, this._questions.length - correct);
    }
  }

}
