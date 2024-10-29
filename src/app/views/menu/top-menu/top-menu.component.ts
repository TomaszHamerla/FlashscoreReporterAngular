import {Component} from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    Button,
    ButtonDirective
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {

}
