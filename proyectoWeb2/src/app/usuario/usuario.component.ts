import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../services/base-datos.service';
import { Funcion } from '../models/funcion';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  private funcion:  Funcion[];
  private FuncionSeleccionada:  Funcion  = { usuario: " ", descripción: " ", codigo: " ", etiqueta: " ", nombre: " "};
  private nombresP: string
  private dato = 'valeria';
  
  constructor(
    private baseDatos: BaseDatosService
  ) { }

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
