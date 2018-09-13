import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorCambio = new EventEmitter<number>();

  constructor() { }

  public ngOnInit() {
  }

  public reset(): void {
    this.contador = 0;
    this.contadorCambio.emit(0);
  }

}
