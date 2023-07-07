import { InjectionToken } from "@angular/core";
import { Question } from "../models/question.model";

export const QUESTION_GENERATOR_TOKEN = new InjectionToken<() => Question>('QUESTION_GENERATOR');