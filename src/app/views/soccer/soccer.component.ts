import {Component, OnInit} from '@angular/core';
import {GameWithDetailsDto} from "../../service/models/game-with-details-dto";
import {GameService} from "../../service/services/game.service";
import {CommonModule} from '@angular/common';
import {TableModule, TablePageEvent} from 'primeng/table';
import {ToastComponent} from "../utils/toast/toast.component";
import {ToastService} from "../../service/utils/toast.service";
import {delay, timeout} from "rxjs";


@Component({
  selector: 'app-soccer',
  standalone: true,
  imports: [CommonModule, TableModule, ToastComponent],
  templateUrl: './soccer.component.html',
  styleUrl: './soccer.component.scss',
})
export class SoccerComponent implements OnInit {
  cols = [
    {field: 'awayTeamName', header: 'Gość'},
    {field: 'awayTeamLogo'},
    {field: 'homeTeamLogo'},
    {field: 'homeTeamName', header: 'Gospodarz'},
    {field: 'gameResult', header: 'Wynik'},
  ];
  gamesData!: GameWithDetailsDto[];

  constructor(
    private gameService: GameService,
    protected toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.toastService.show();
    this.gameService.getGames().pipe(delay(800)).subscribe({
      next: (val) => {
        this.gamesData = val;
        console.log(val);
      },
      error: err => {
        this.toastService.hide();
      },
      complete: () => {
        this.toastService.hide();
      }
    });
  }
}
