import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isSameColor, randomColor } from '../tools/random-tools';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private generatedColor: string = '';
  private _generatedColor$ = new BehaviorSubject<string>('');
  private _guessedColor$ = new BehaviorSubject<string>('');
  private _guessCorrect$ = new BehaviorSubject<boolean>(false);

  readonly generatedColor$ = this._generatedColor$.asObservable();
  readonly guessedColor$ = this._guessedColor$.asObservable();
  readonly guessCorrect$ = this._guessCorrect$.asObservable();

  generateColor() {
    this.generatedColor = randomColor();
    this._generatedColor$.next(this.generatedColor);
    this._guessedColor$.next('rgb(0,0,0)');
    this._guessCorrect$.next(false);
  }

  updateGuess(color: string) {
    this._guessedColor$.next(color);
    this._guessCorrect$.next(isSameColor(this.generatedColor, color));
  }

  constructor() { 
    this.generateColor();
  }
}
