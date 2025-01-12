import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {GameWithDetailsDto} from "../models/game-with-details-dto";
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(
    private http: HttpClient
  ) {
  }

  getGames() {
    return this.http.get<GameWithDetailsDto[]>(`${environment.apiUrl}/games`)
  }

  getGameById(gameId: number){
    return this.http.get<Game>(`${environment.apiUrl}/games/${gameId}`)
  }

}
