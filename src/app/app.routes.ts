import { Routes } from '@angular/router';
import {HomePageComponent} from "./views/home-page/home-page.component";
import {HockeyComponent} from "./views/hockey/hockey.component";
import {SoccerComponent} from "./views/soccer/soccer.component";
import {LoginComponent} from "./views/login/login.component";

export const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'soccer', component: SoccerComponent},
  {path: 'hockey', component: HockeyComponent},
  {path: 'login', component: LoginComponent},
];
