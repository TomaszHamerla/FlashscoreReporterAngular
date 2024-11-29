import {Component} from '@angular/core';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NgIf} from "@angular/common";
import {ToastService} from "../../../service/utils/toast.service";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    ProgressSpinnerModule,
    NgIf
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

 constructor(protected toastService: ToastService) {
 }

}
