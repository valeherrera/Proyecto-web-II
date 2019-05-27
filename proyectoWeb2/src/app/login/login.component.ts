import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public name: string;
  public email: string;
  public photo: string;

  constructor(
    public afAuth: AngularFireAuth,
    public localStorage: LocalStorage,
    public router: Router
  
    
    ) { }
  ngOnInit() {
  }

  onLoginGoogle(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((userData)=>{
      this.name = userData.user.displayName;
      this.email = userData.user.email;
      this.photo = userData.user.photoURL;

      sessionStorage.setItem("username", this.name);
      sessionStorage.setItem("email", this.email);
      sessionStorage.setItem("photo", this.photo);

      this.router.navigate(['/usuario']);

    });

    console.log(this.name);
    console.log(this.email);
    console.log(this.photo);
  }
  
  onLoginFacebook(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then((userData)=>{
      this.name = userData.user.displayName;
      this.email = userData.user.email;
      this.photo = userData.user.photoURL;

      sessionStorage.setItem("username", this.name);
      sessionStorage.setItem("email", this.email);
      sessionStorage.setItem("photo", this.photo);
      //this.router.navigate(['/Usuario']);

    });

    console.log(this.name);
    console.log(this.email);
    console.log(this.photo);
      
    

  }

  onLogOut(){
    this.afAuth.auth.signOut();
    
  }
}
