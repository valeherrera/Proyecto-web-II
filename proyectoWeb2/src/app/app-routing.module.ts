import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent} from './usuario/usuario.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MyfunctionsComponent} from './myfunctions/myfunctions.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UsuarioComponent},
  { path: 'search', component: BuscarComponent},
  { path: 'myfunctions', component: MyfunctionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
