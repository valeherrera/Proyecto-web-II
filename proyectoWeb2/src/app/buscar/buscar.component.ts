import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { BaseDatosService } from '../services/base-datos.service';
import { Funcion } from '../models/funcion';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  private funciones = [];
  private dependencias = [];

  constructor(
    public afAuth: AngularFireAuth,
    public localStorage: LocalStorage,
    public router: Router,
    private baseDatos: BaseDatosService
  ) { }

  ngOnInit() {
    this.funciones;
  }

  ObtenerFunciones(valor: any) {
    this.baseDatos.leerFuncion(valor).subscribe(

      resultFunciones => {
        this.funciones = resultFunciones;

        if (this.funciones.length == 0) {
          alert("No hay funciones relacionado a su búsqueda");
        } else {

          for (let i = 0; i < this.funciones.length; i++) {

            this.baseDatos.obtenerDependencias(this.funciones[i].idfuncion).subscribe(
              resultDependencias => {
                this.dependencias = resultDependencias;

                if (this.dependencias.length == 0) {
                  alert("No hay dependencias para la función: "+ this.funciones[i].nombre + " por: " +this.funciones[i].usuario);
                }
                else {
                  this.InsertarDependencias(i);                
                }
              });
            console.log(this.funciones[i]);
            console.log("------------------------------------------")
          }
        }
      });
  }

  InsertarDependencias(valor: number){
    
    let dependencias = [];
    let nombresDep = "";

    
    for(let i=0; i<this.dependencias.length; i++){
      dependencias.push(this.dependencias[i][0]);
      nombresDep += this.dependencias[i][0].nombre + ", ";
    }
    this.funciones[valor].dependencias=dependencias;
    this.funciones[valor].nombresDependencias=nombresDep;

    console.log(nombresDep);
  }


  busqueda() {
    return true;
  }


}
