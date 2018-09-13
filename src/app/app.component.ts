import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-example';
  contador: number;

  constructor() {
    this.contador = 10;
  }

  public incrementar(): void {
    this.contador ++;
  }

  public decrementar(): void {
    this.contador --;
  }
}
