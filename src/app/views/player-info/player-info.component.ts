import {Component, OnInit} from '@angular/core';
import {Player} from "../../service/models/game";
import {PlayerService} from "../../service/services/player.service";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-player-info',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    NgIf
  ],
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.scss'
})
export class PlayerInfoComponent implements OnInit {
  playerId: number | null = null;
  player: Player | null = null;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.playerId = +id;
        this.loadPlayerInfo(this.playerId);
      }
    });
  }

  private loadPlayerInfo(playerId: number): void {
    this.playerService.getPlayerInfo(playerId).subscribe((data) => {
        this.player = data;
    });
  }
}
