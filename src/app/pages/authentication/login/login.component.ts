import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../shared/services/login.service";
import {UserLogin} from "../models/user-login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: LoginService) {
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
    userLogin.username = this.loginForm.value.email;
    userLogin.password = this.loginForm.value.password;
    console.error(userLogin);
    if(this.loginForm.invalid){
      return;
    } else {
      if(userLogin){
        this.loginService.login(userLogin).subscribe(response => console.error(response));
      }
    }
  }
}
