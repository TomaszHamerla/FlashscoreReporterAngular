import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TeamServiceService} from "../../service/services/team-service.service";
import {TeamInfo} from "../../service/models/game";
import {TableModule} from "primeng/table";
import {NgIf} from "@angular/common";
import {AccordionModule} from "primeng/accordion";

@Component({
  selector: 'app-team-info',
  standalone: true,
  imports: [
    TableModule,
    NgIf,
    AccordionModule
  ],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.scss'
})
export class TeamInfoComponent implements OnInit {
  teamId: number | null = null;
  teamInfo!: TeamInfo;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamServiceService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.teamId = +id;
        this.loadTeamInfo(this.teamId);
      }
    });
  }

  private loadTeamInfo(teamId: number): void {
    this.teamService.getTeamInfo(teamId).subscribe((data) => {
      this.teamInfo = data;
    });
  }
}
