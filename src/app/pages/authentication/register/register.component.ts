import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserAuth} from "../models/user-auth.model";
import {AuthService} from "../../../shared/services/auth.service";
import {EventStorageService} from "../../../shared/services/event-storage.service";
import {AuthResponse} from "../models/auth-response.model";
import {User} from "../../../shared/models/user.model";
import {SessionStorageService} from "../../../shared/services/session-storage.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService,
              private eventStorageService: EventStorageService,
              private sessionStorageService: SessionStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.registerForm = new FormGroup({
      // TODO using Firebase Auth API, when it will be needed update form and request
      // firstName: new FormControl(null, [Validators.required, Validators.email]),
      // lastName: new FormControl(null, [Validators.required, Validators.email]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  register() {
    const userAuth = new UserAuth();
    userAuth.email = this.registerForm.value.email
    userAuth.password = this.registerForm.value.password
    this.authService.signup(userAuth).subscribe({
      next: (response: AuthResponse) => {
      if (response) {
        // const newlySignedInUser = new User();
        // newlySignedInUser.email = response.email;
        // newlySignedInUser.idToken = response.idToken;
        // newlySignedInUser.expiresIn = new Date( Date.now() + +response.expiresIn * 1000);
        this.eventStorageService.setIsLoggedIn(!!response);
        this.sessionStorageService.set('idToken',  response.idToken)
        this.router.navigate(['/'])
      }
    },
      error: error => {
        console.error(error);
        // console.error(error.error.error.message === ErrorMessage.EMAIL_EXISTS ? ErrorConstants.EMAIL_EXISTS : 'blah blah' );
      }
  });
  }
}
