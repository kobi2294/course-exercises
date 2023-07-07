import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamService } from 'src/app/services/exam.service';
import { QuestionComponent } from '../question/question.component';
import { QUESTION_GENERATOR_TOKEN } from 'src/app/tokens/question-generator.token';
import { PlayerService } from 'src/app/services/player.service';
import { getGeneratorForLevel } from 'src/app/helpers/question-generator';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'], 
  providers: [ExamService, {
    provide: QUESTION_GENERATOR_TOKEN, 
    useFactory: (service: PlayerService) => getGeneratorForLevel(service.level), 
    deps: [PlayerService]
  }]
})
export class ExamComponent {
  constructor(protected examService: ExamService){}

}
