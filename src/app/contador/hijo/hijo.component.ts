import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  public ngOnInit() {
  }

  public multiplicar(): void {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  public dividir(): void {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  public resetNieto(nuevoContador: number): void {
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }

}
