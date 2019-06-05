import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxWebstorageModule} from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, AuthServiceConfig,GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login';
import { UsuarioComponent } from './usuario/usuario.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { HttpClientModule } from '@angular/common/http';
import { BaseDatosService} from './services/base-datos.service';
import { BuscarComponent } from './buscar/buscar.component';
import { MyfunctionsComponent } from './myfunctions/myfunctions.component';

import { TooltipModule, AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    BuscarComponent,
    MyfunctionsComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    LayoutModule,
    CodemirrorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    

  ],
  providers: [AngularFireAuth, BaseDatosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
