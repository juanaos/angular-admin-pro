import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface valorColumna {
  columna: number;
  valor: string;
}

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent implements OnInit {

  miFormulario: FormGroup =  new FormGroup({
    'columna': new FormControl(1),
    'valor': new FormControl('Este es el valor por defecto')
  });

  progreso1: number = 25;
  progreso2: number = 35;

  valorInput: valorColumna[] = [
    {columna: 1, valor: 'Este es un valor para la columna 1.'},
    {columna: 2, valor: 'Este es un valor para la columna 2.'},
    {columna: 1, valor: 'Este es otro valor para la columna 1.'},
    {columna: 1, valor: 'Este es otro valor mas para la columna 1.'},
    {columna: 2, valor: 'Este es otro valor para la columna 2.'},
    {columna: 2, valor: 'Este es otro valor mas para la columna 2.'},
  ]
  

  constructor() {}

  ngOnInit(): void {
  }

  get getProgreso1() {
    return `${this.progreso1}%`;
  }

  get getProgreso2() {
    return `${this.progreso2}%`;
  }

  // cambioValorHijo(valor:number) {
  //   this.progreso1 = valor;
    
  // }

}
