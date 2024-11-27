import {Component, OnInit} from '@angular/core';
import {GameWithDetailsDto} from "../../service/models/game-with-details-dto";
import {GameService} from "../../service/services/game.service";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-soccer',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './soccer.component.html',
  styleUrl: './soccer.component.scss',
})
export class SoccerComponent implements OnInit {
  cols = [
    { field: 'awayTeamName', header: 'Gość' },
    { field: 'awayTeamLogo' },
    { field: 'homeTeamLogo' },
    { field: 'homeTeamName', header: 'Gospodarz' },
    { field: 'gameResult', header: 'Wynik' },
  ];
  gamesData!: GameWithDetailsDto[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (val) => {
        this.gamesData = val;
        console.log(val);
      },
    });
  }
}
