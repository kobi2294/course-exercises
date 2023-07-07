import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './services/player.service';
import { PlayerComponent } from './components/player/player.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ExamComponent } from './components/exam/exam.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayerComponent, SummaryComponent, ExamComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(protected playerService: PlayerService){}
}
