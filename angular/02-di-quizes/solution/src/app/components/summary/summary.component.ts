import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  constructor(protected playerService: PlayerService){}

}
