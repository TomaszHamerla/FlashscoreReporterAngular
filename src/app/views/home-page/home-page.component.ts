import {Component, OnInit} from '@angular/core';
import {GameService} from "../../service/services/game.service";
import {GameWithDetailsDto} from "../../service/models/game-with-details-dto";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  gamesData!: GameWithDetailsDto[];

  constructor(
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {

  }

  private prepareGames(){
    this.gameService.getGameById(865083).subscribe({
      next: val => {
        this.gamesData.push(val);
      }
    })
  }

}
