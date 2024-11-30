import {Component, OnInit} from '@angular/core';
import {GameService} from "../../service/services/game.service";
import {GameWithDetailsDto} from "../../service/models/game-with-details-dto";
import {CardModule} from "primeng/card";
import {NgForOf, NgIf} from "@angular/common";
import {ToastService} from "../../service/utils/toast.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  gamesData: GameWithDetailsDto[] = [];

  constructor(
    private gameService: GameService,
    protected toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.prepareGames();

  }

  private prepareGames() {
    this.toastService.show();
    this.gameService.getGames().subscribe({
      next: val => {
        this.gamesData = val.filter(v => v.gameId === 865081 || v.gameId === 865082 || v.gameId === 865083);
      },
      error: err => {
        this.toastService.hide();
      },
      complete: () => {
        this.toastService.hide();
      }
    })
  }

  getGameDetails(game: GameWithDetailsDto) {
    console.log(game);
  }
}
