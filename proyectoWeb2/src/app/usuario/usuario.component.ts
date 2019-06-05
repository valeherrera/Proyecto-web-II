import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../services/base-datos.service';
import { Funcion } from '../models/funcion';
//import {BsModalService} from 'ngx-bootstrap/modal';
//import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  private funcion:  Funcion[];
  private FuncionSeleccionada:  Funcion  = { usuario: " ", descripción: " ", codigo: " ", etiqueta: " ", nombre: " "};
  private nombresP: string
<<<<<<< HEAD
  private dato = 'valeria';
  
  constructor(
    private baseDatos: BaseDatosService
  ) { }
=======

  funciones = [{"nombre": 'suma', "usuario": 'Pame', "descripcion":'funcion aritmetica',"dependencias": ['sum1', 'sum2','sum3','sum1', 'sum2','sum3','sum1', 'sum2','sum3']},
                {"nombre": 'suma2', "usuario": 'Vale', "descripcion":'funcion aritmetica v2',"dependencias": ['sum3', 'sum4','sum5']},
                {"nombre": 'suma2', "usuario": 'Vale', "descripcion":'funcion aritmetica v2',"dependencias": ['sum6', 'sum7','sum8']},
                {"nombre": 'suma2', "usuario": 'Vale', "descripcion":'funcion aritmetica v2',"dependencias": ['sum1', 'sum2','sum3']}]
 

  constructor(private baseDatos: BaseDatosService) { }
>>>>>>> b5d9529dc1fdefc34aafab6923951e364618c707

  ngOnInit() {

  }
    
  ObtenerFunciones (){

    console.log("llegó");
    
    this.baseDatos.leerFuncion(this.dato).subscribe(nombres=>{
      this.nombresP = nombres;
      console.log(this.nombresP);
    })

    console.log("salió");    

  }


 





}
