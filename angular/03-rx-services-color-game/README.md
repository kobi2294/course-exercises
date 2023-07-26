# Reactive Services - Color Game

## Prerequisites
To complete this exercise students should know
- Basic RxJS - Observables, Subjects but without operators
- Using the async pipe
- Basic reactive forms

## Goal
Practice writing angular services according to the reactive pattern.
* Using behavior subjects
* Using observables
* Using the async pipe
* Creating forms and using them reactively

## Overview
In this exercise we will build a game where the user has to guess the RGB components of a color. The computer will present an random color and the user will have to create the same color by controlling the R, G, B values using sliders. 

## Requirements

1. Create a new service named `ColorService`. This service should contain three `BehaviorSubjects`:
    - `_generatedColor$` which holds the currently generated color string (in the css format: `rgb(123, 32, 55)`)
    - `_guessedColor$` which holds the currently guessed color string.
    - `_guessCorrect$` which holds a boolean indicating if the current guess is correct or not.

2. This service should also expose three observables:
   - `generatedColor$` which exposes the current generated color.
   - `guessedColor$` which exposes the current guessed color.
   - `guessCorrect$` which exposes whether the current guess is correct.

3. The service should also have two methods:
    - `generateColor()` which generates a new random color and updates `_generatedColor`, resets `_guessedColor` to `'rgb(0, 0, 0)'` and sets `_guessCorrect` to `false`.
   - `updateGuess(color: string)` which updates `_guessedColor` with a new guess and checks if the new guess matches the generated color, updating `_guessCorrect` accordingly.

4. In the visual layer, Set up a `FormGroup` with three `FormControl` instances, one for each RGB component. 
5. Create the html and attach 3 `<input type="range">` elements that go from 0 to 255. 
6. The `AppComponent` should subscribe to the `valueChanges` observable of the `FormGroup`, and each time the form's value changes, it should update the guessed color in the `ColorService`.
7. Make sure to present both the "guessed" color and the "generated" color one next to the other.
8. You should display whether the current guess is correct. When it is correct, display a "start again" button which will generate a new color and restart the game

## Challanges
1. Since hitting the color **Exactly** is quite difficult, change the implementation so that the 2 guess is considered correct if the distance between the colors is less then 10.
    - The distance between 2 colors is calculated by the following formula: `sqrt(dR^2 + dG^2 + dB^2)` when dR is the difference in red components, dG is the difference in green components, and dB is the difference in blue components
2. For better game experience, try to present the current "distance". Do not present it as the exact number, try to normalize it to a number between 0 - 100 where 100 is any distance larger than `110.0` and 0 is any distance smaller than `10.0`.
3. To improve it even more, you can use Css to present the distance as a progress bar. Create the following html structure:
``` html
<div class="track">
    <div class=thumb"></div>
</div>
```
And set the width of the thumb to a percentage according to the distance. You can use the `map` operator to convert the distance observable to percentage;


## Remarks and Hints
* `FormGroup` has a property called `valueChanges` which is an observable that yields value of the entire form, when it changes.


