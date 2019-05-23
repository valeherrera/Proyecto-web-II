import { Component, OnInit } from '@angular/core';
import {AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService) { }
  ngOnInit() {
  }

  facebookLogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user = userData;
    });
  }

  googleLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user = userData;
    });

    console.log(this.user);
  }

}
