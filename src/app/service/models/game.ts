export interface Player {
  id: number;
  name: string;
  position: string;
  photo: string | null;
  events: Event[];
  team: Team;
}

export interface Event {
  gameId: number;
  teamId: number;
  teamName: string;
  type: number;
  details: string;
  comments: string | null;
  time: number;
  playerName: string;
  assistPlayerName: string | null;
}

export interface Game {
  gameId: number;
  homeTeamName: string;
  homeTeamLogo: string;
  awayTeamName: string;
  awayTeamLogo: string;
  homeTeamLineup: Player[];
  awayTeamLineup: Player[];
  events: Event[];
  gameResult: string;
}

export interface Team {
  teamId: number;
  teamName: string;
  teamLogo: string;
}

export interface TeamInfo {
  teamId: number;
  teamName: string;
  teamLogo: string;
  players: Player[];
  games: Game[];
}
