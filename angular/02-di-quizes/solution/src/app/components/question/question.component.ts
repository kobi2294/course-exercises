import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  constructor(protected examService: ExamService){}

}
