import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamService } from 'src/app/services/exam.service';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'], 
  providers: [ExamService]
})
export class ExamComponent {
  constructor(protected examService: ExamService){}
}
