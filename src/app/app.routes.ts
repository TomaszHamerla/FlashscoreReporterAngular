import { Routes } from '@angular/router';
import {HomePageComponent} from "./views/home-page/home-page.component";
import {HockeyComponent} from "./views/hockey/hockey.component";
import {SoccerComponent} from "./views/soccer/soccer.component";
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {SoccerGameInfoComponent} from "./views/soccer/soccer-game-info/soccer-game-info.component";
import {PlayerInfoComponent} from "./views/player-info/player-info.component";
import {TeamInfoComponent} from "./views/team-info/team-info.component";

export const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'soccer', component: SoccerComponent},
  {path: 'hockey', component: HockeyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'game/:id', component: SoccerGameInfoComponent},
  {path: 'player/:id', component: PlayerInfoComponent},
  {path: 'team/:id', component: TeamInfoComponent},
];
