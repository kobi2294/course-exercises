import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsService } from './services/colors.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { rgbString, stringToRgb } from './tools/random-tools';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private colorsService: ColorsService) {}

  generatedColor$ = this.colorsService.generatedColor$;
  guessColor$ = this.colorsService.guessedColor$;
  isCorrect$ = this.colorsService.guessCorrect$;
  distance$ = this.colorsService.distance$.pipe(
    map(val => `${val}%`), 
    tap(console.log)
  )

  form = new FormGroup({
    r: new FormControl(0),
    g: new FormControl(0),
    b: new FormControl(0),
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => {
      this.colorsService.updateGuess(rgbString(val.r!, val.g!, val.b!));
    });
  }

  restart() {
    this.form.reset({r: 0, g: 0, b: 0});
    this.colorsService.generateColor();
  }
}
