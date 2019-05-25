import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { of, fromEvent} from 'rxjs';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import {NgxWebstorageModule} from 'ngx-webstorage';


>>>>>>> social-login

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { SocialLoginModule, AuthServiceConfig,GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
=======
>>>>>>> social-login


import { UsuarioComponent } from './usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    SocialLoginModule,
    LayoutModule,
    CodemirrorModule
=======
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgxWebstorageModule.forRoot()
>>>>>>> social-login
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})

export class AppModule { }
