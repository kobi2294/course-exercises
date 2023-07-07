import { Question } from "../models/question.model";
import { randomNumber } from "./random";

export function generateBeginnerQuestion(): Question {
    const op1 = randomNumber(1, 10);
    const op2 = randomNumber(1, 10);
    return {
        caption: `${op1} + ${op2} = ?`, 
        answer: op1 + op2
    }
}

export function generateIntermediateQuestion(): Question {
    const op1 = randomNumber(5, 10);
    const op2 = randomNumber(5, 10);
    return {
        caption: `${op1} * ${op2} = ?`, 
        answer: op1 * op2
    }
}

export function generateAdvacnedQuestion(): Question {
    const op1 = randomNumber(8, 15);
    const op2 = randomNumber(8, 15);
    return {
        caption: `${op1} * ${op2} = ?`, 
        answer: op1 * op2
    }
}
