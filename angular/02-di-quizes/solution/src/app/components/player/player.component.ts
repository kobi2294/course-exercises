import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(protected playerService: PlayerService){}

  startExam() {
    this.playerService.startExam();
  }

}
