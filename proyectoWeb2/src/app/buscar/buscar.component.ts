import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  funciones = [{"nombre": 'suma', "usuario": 'Pame', "descripcion":'funcion aritmetica',"dependencias": ['sum1', 'sum2','sum3']},
                {"nombre": 'suma2', "usuario": 'Vale', "descripcion":'funcion aritmetica v2',"dependencias": ['sum1', 'sum2','sum3']}]
  
  constructor() { }

  ngOnInit() {

    this.funciones;
  
  }

  busqueda(){
    return true;
  }

}
