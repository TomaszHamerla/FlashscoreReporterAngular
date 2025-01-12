import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player, Team, TeamInfo} from "../models/game";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(
    private http: HttpClient
  ) {
  }

  getTeams(){
    return this.http.get<Team[]>(`${environment.apiUrl}/teams`)
  }

  getTeamInfo(teamId: number) {
    return this.http.get<TeamInfo>(`${environment.apiUrl}/teams/${teamId}`)
  }
}
