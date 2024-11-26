import {Component, OnInit} from '@angular/core';
import {GameWithDetailsDto} from "../../service/models/game-with-details-dto";
import {GameService} from "../../service/services/game.service";

@Component({
  selector: 'app-soccer',
  standalone: true,
  imports: [],
  templateUrl: './soccer.component.html',
  styleUrl: './soccer.component.scss'
})
export class SoccerComponent implements OnInit {
  gamesData!: GameWithDetailsDto[];

  constructor(
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: val => {
        this.gamesData = val;
        console.log(val)
      }
    })
  }
}
