import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game, Player} from "../models/game";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPlayerInfo(playerId: number){
    return this.http.get<Player>(`${environment.apiUrl}/players/${playerId}`)
  }
}
