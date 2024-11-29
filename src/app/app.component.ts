import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopMenuComponent} from "./views/menu/top-menu/top-menu.component";
import {ToastComponent} from "./views/utils/toast/toast.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
