import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.component.html',
  styleUrls: ['./ejercicio01.component.css']
})
export class Ejercicio01Component implements OnInit {
  edadUno?: number;
  edadDos?: number;
  suma?:number;
  promedio?:number;
  constructor() { }

  ngOnInit(): void {
  }
  title = 'Ejercicios-Clase01';
 
  calcular()
  {
    if(this.edadUno != null && this.edadDos != null)
    {
      this.suma = this.edadUno + this.edadDos;
      this.promedio = this.suma / 2;
    }
  }

  limpiar()
  {
    this.suma = 0;
    this.promedio = 0;
  }

  saludar(){
    alert("Hola que onda??");
  }

}
