import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcion } from  '../models/funcion';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {


  constructor(
    private httpClient: HttpClient
  ) {}

  private serverConn = "http://localhost/server/";
  


  leerFuncion(dato:string): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${this.serverConn}leer.php?dato=${dato}`);
  }

  obtenerDependencias(codigo:any): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${this.serverConn}obtenerDependencias.php?codigo=${codigo}`);
  }
/*   createFuncion(funcion: Funcion): Observable<Funcion>{
    return this.httpClient.post<Funcion>(`${this.serverConn}/creaar.php`, funcion);
  }

  updatePolicy(funcion: Funcion){
    return this.httpClient.put<Funcion>(`${this.serverConn}/api/actualizar.php`, funcion);   
  }

  deletePolicy(codigo: string){
    return this.httpClient.delete<Funcion>(`${this.serverConn}/api/eliminar.php/?id=${codigo}`);
  }

*/
}
