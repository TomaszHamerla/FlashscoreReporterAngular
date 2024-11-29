import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  load = false;

  constructor() { }


  isVisible(): boolean {
    return this.load;
  }
  show() {
    this.load = true;
  }

  hide() {
    this.load = false;
  }
}
