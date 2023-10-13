import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../shared/services/login.service";
import {UserLogin} from "../models/user-login.model";
import {Router} from "@angular/router";
import {User} from "../../../shared/models/user.model";
import {EventStorageService} from "../../../shared/services/event-storage.service";
import {SessionStorageService} from "../../../shared/services/session-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router,
              private loginService: LoginService,
              private eventStorageService: EventStorageService,
              private sessionStorageService: SessionStorageService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }

  onLogin(){
    const userLogin = new UserLogin();
    userLogin.email = this.loginForm.value.email;
    userLogin.password = this.loginForm.value.password;
    if(this.loginForm.invalid){
      return;
    } else {
      if(userLogin){
        this.loginService.login(userLogin).subscribe((response) => {
         if (response) {
           // const loggedInUser = new User();
           // loggedInUser.email = response.email;
           // loggedInUser.idToken = response.idToken;
           // loggedInUser.expiresIn = new Date( Date.now() + +response.expiresIn * 1000);
           this.eventStorageService.setIsLoggedIn(!!response);
           this.sessionStorageService.set('idToken',  response.idToken)
           this.router.navigate(['/'])
         } else {
           // @ts-ignore
           this.eventStorageService.setIsLoggedIn(false);
           this.sessionStorageService.delete('idToken');
           this.router.navigate(['authentication/login'])
         }
        });
      }
    }
  }
}
