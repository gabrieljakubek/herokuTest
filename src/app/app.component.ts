import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public edadUno: number = 0;
  public edadDos: number = 0;
  public resultado: number = 0;
  public promedio: number = 0;
  constructor() {}
  calcular(): any {
    this.resultado = this.edadUno + this.edadDos;
    this.promedio = this.resultado / 2;
  }
  limpiar(): any {
    this.edadUno = 0;
    this.edadDos = 0;
    this.resultado = 0;
    this.promedio = 0;
  }
}
