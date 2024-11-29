import {Component, OnInit} from '@angular/core';
import {GameService} from "../../service/services/game.service";
import {GameWithDetailsDto} from "../../service/models/game-with-details-dto";
import {CardModule} from "primeng/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardModule,
    NgForOf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  gamesData: GameWithDetailsDto[] = [];

  constructor(
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.prepareGames(865081);
    this.prepareGames(865082);
    this.prepareGames(865083);

    console.log(this.gamesData)
  }

  private prepareGames(gameId: number){
    this.gameService.getGameById(gameId).subscribe({
      next: val => {
        this.gamesData.push(val);
      }
    })
  }

}
