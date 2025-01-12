import {Component, OnInit} from '@angular/core';
import {Game, Team} from "../../../service/models/game";
import {GameService} from "../../../service/services/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {BadgeModule} from "primeng/badge";
import {CardModule} from "primeng/card";
import {ChipModule} from "primeng/chip";
import {TagModule} from "primeng/tag";
import {AccordionModule} from "primeng/accordion";
import {TeamServiceService} from "../../../service/services/team-service.service";

@Component({
  selector: 'app-soccer-game-info',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PanelModule,
    BadgeModule,
    CardModule,
    ChipModule,
    TagModule,
    NgClass,
    AccordionModule
  ],
  templateUrl: './soccer-game-info.component.html',
  styleUrl: './soccer-game-info.component.scss'
})
export class SoccerGameInfoComponent implements OnInit{
  gameId: number | null = null;
  gameData: Game | null = null;
  teams: Team [] | null = null;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router,
    private teamServiceService: TeamServiceService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.gameId = +id;
        this.loadGameDetails(this.gameId);
      }
    });

    this.teamServiceService.getTeams().subscribe({
      next: data => {
        this.teams = data;
      }
    })
  }

  private loadGameDetails(gameId: number): void {
    this.gameService.getGameById(gameId).subscribe((data) => {
      if (data.gameId === gameId) {
        this.gameData = data;
      }
    });
  }

  getPlayerInfo(id: number) {
    this.router.navigate(['/player', id]);
  }

  getTeamInfo(name: any) {
    if (this.teams) {
      const team = this.teams.find(t => t.teamName === name);
      this.router.navigate(['/team', team?.teamId]);
    }
  }
}
