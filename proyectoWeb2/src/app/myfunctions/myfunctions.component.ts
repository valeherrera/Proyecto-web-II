import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myfunctions',
  templateUrl: './myfunctions.component.html',
  styleUrls: ['./myfunctions.component.css']
})
export class MyfunctionsComponent implements OnInit {

  funciones = [{"nombre": 'suma', "usuario": 'Pame', "descripcion":'funcion aritmetica',"dependencias": ['sum1', 'sum2','sum3','sum1', 'sum2','sum3','sum1', 'sum2','sum3']},
                {"nombre": 'suma2', "usuario": 'Vale', "descripcion":'funcion aritmetica v2',"dependencias": ['sum1', 'sum2','sum3']},
                {"nombre": 'suma2', "usuario": 'Vale', "descripcion":'funcion aritmetica v2',"dependencias": ['sum1', 'sum2','sum3']},
                {"nombre": 'suma2', "usuario": 'Vale', "descripcion":'funcion aritmetica v2',"dependencias": ['sum1', 'sum2','sum3']}]
  
  constructor() {

    this.funciones;

  }

  ngOnInit() {
  
  }

  public mensaje(){
      alert('hola')

  }

}
