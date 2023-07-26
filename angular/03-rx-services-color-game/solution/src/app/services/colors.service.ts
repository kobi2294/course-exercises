import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distance, isSameColor, randomColor, stringToRgb } from '../tools/random-tools';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private generatedColor: string = '';
  private _generatedColor$ = new BehaviorSubject<string>('');
  private _guessedColor$ = new BehaviorSubject<string>('');
  private _guessCorrect$ = new BehaviorSubject<boolean>(false);
  private _distance$ = new BehaviorSubject<number>(10);

  readonly generatedColor$ = this._generatedColor$.asObservable();
  readonly guessedColor$ = this._guessedColor$.asObservable();
  readonly guessCorrect$ = this._guessCorrect$.asObservable();
  readonly distance$ = this._distance$.asObservable();

  generateColor() {
    this.generatedColor = randomColor();
    this._generatedColor$.next(this.generatedColor);
    this._guessedColor$.next('rgb(0,0,0)');
    this._guessCorrect$.next(false);

    const dist = distance([0, 0, 0], this.generatedColor);
    this._distance$.next(dist);
  }

  updateGuess(color: string) {
    this._guessedColor$.next(color);
    this._guessCorrect$.next(isSameColor(this.generatedColor, color));
    const dist = distance(color, this.generatedColor);
    this._distance$.next(dist);
  }

  constructor() { 
    this.generateColor();
  }
}
