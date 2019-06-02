import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent} from './usuario/usuario.component';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'buscar', component: BuscarComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
