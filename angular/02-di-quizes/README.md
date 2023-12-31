# Angular Services and Dependency Injection - Quizes App

## Prerequisites
To complete this exercise students should know
- Angular basic component authoring (binding, inputs, outputs, lifecycle hooks)
- Dependency Injection in Angular (root injector, component injector, provider types, injection token)


## Goal
Practice Angulars Dependency Injection system
* Singletons at root injector
* Component Scoped Services
* Different Types of providers

## Overview
In this exercise we will build a math quiz application that allows children to practice their arithmetic skills. The application will allow the user to take a quick quiz, answer a sequence of questions, and get a report of the exam. The application will present the user with history of past exams scores and the average score so far. As the player becomes more advanced, the level of the questions raises. 

## Requirements
1. Define the data model. 
```typescript
    export interface Question {
        caption: string;
        answer: number;
    }

    export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

    export interface QuizResult {
        date: Date;
        level: Level;
        correctAnswers: number;
        totalQuestions: number;
        score: number // 1 .. 100
    }
```

2. Create 3 different random question generators as standalone helper functions:
    - `generateBeginnerQuestion` - a random `X + Y` question where X and Y are between 1 and 10
    - `generateIntermediateQuestion` - a random `X * Y` question where X and Y are between 5 and 10
    - `generateAdvancedQuestion` - a random `X * Y` question where X and Y are between 8 and 15
3. Create another helper function, a pure function that calculates a player level according to a list of quiz results, according to the following rules: 
    - By default the level is `Beginner`.
    - If the list contains at least 3 full quizes, and the average score is above 60, he becomes `Intermediate`
    - If the list contains at least 3 full `Intermediate` or `Advanced` quizes, and the average score is above 80, the level is `Advanced`
4. Create a `PlayerService` that maintains and allows to modify the state of the player
    - `pastResults: QuizResult[]` - The list of past results of the player
    - `isTakingExam: boolean` - Is the player currently taking an exam. when true, the application will show an exam in the main area. When not true, the application will show a report of the quiz results
    - `scoresAverage: number` - The average of the past results.
    - `level: PlayerLevel` - The current level of the player according to his past scores
    - expose a method called `startExam` which changes the `isTakingExam` property to true
    - expose a method called `completeExam(level, correct, wrong)` which adds a new `QuizResult`, and changes the `isTakingExam` flag to false. Don't forget to update the average score and level.
    - The `PlayerService` should be provided in root as there is only one single player state in the entire app.
5. Create a `ExamService` that maintains the state of an on going exam. This service will be instantiated every time an exam starts, and destroyed when the exam completes
    - When created, the service should generate a sequence of random questions according to the level of the player
    - The service will hold a list of answers provided by the user so far
    - The service will expose a calculated value of the "current question"
    - The service will expose a method `answerCurrentQuestion(value)` that gets the user answer and modifies the state
    - When the quiz is completed, the service will call the `PlayerService.completeExam` method and pass the results
6. Build the proper components: You should have at least:
    - `PlayerComponent` - Smart component that displays the player info
    - `ExamComponent` - Smart component that runs the exam and presents the current status
    - `QuestionComponent` - Smart component that presents the "current questions" and allows to answer it
    - Feel free to add more components

## Challanges
1. Where would you provide the `PlayerService`?
2. Where would you provide the `ExamService`?
3. So far, the `ExamService` has decided how many questions to generate per each exam, your boss now adds a new requirement that the number of questions can be configured outside and that the exam service will get this configuration in the constructor. How and where would you provide it?
4. Now your boss comes out with a new requirement. The exam service should not decide which question generator to use, the generator function should also be provided in the constructor. How and where would you provide it?

## Remarks and Hints
- In this exercise you are allowed to bind directly to service properties. In reality this is a very bad practice (in the future we will use `RxJS` to avoid it) but we will allow it here in order to make this exercise simple and focused on DI and components only.
- You are also allowed to bind to property getter functions. Binding to functions is usually very bad practice. Try to minimize it to only binding to property getters - not member methods. 


