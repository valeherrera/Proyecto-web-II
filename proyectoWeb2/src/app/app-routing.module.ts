import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent} from './usuario/usuario.component';
import { AdminComponent} from './admin/admin.component';


const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Usuario', component: UsuarioComponent},
  { path: 'Admin', component: AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
