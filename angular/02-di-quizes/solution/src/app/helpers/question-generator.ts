import { Level } from '../models/level.model';
import { Question } from '../models/question.model';
import { randomNumber } from './randoms';

export function generateBeginnerQuestion(): Question {
  const op1 = randomNumber(1, 10);
  const op2 = randomNumber(1, 10);
  return {
    caption: `${op1} + ${op2} = ?`,
    answer: op1 + op2,
  };
}

export function generateIntermediateQuestion(): Question {
  const op1 = randomNumber(5, 10);
  const op2 = randomNumber(5, 10);
  return {
    caption: `${op1} * ${op2} = ?`,
    answer: op1 * op2,
  };
}

export function generateAdvancedQuestion(): Question {
  const op1 = randomNumber(8, 15);
  const op2 = randomNumber(8, 15);
  return {
    caption: `${op1} * ${op2} = ?`,
    answer: op1 * op2,
  };
}

export function getGeneratorForLevel(level: Level): () => Question {
  switch (level) {
    case 'Beginner':
      return generateBeginnerQuestion;
    case 'Intermediate':
      return generateIntermediateQuestion;
    case 'Advanced':
      return generateAdvancedQuestion;
  }
}
