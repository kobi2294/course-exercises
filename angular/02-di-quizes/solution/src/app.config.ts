import { ApplicationConfig } from '@angular/core';
import { NUMBER_OF_QUESTIONS_TOKEN } from './tokens/number-of-questions.token';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: NUMBER_OF_QUESTIONS_TOKEN, 
      useValue: 5
    }
  ]
};
