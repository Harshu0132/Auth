import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  SignUpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  userRegister() {

    this.authenticationService.userRegister(this.SignUpForm.value).subscribe((success) => {
      if (success) {
        this.router.navigate(['/login'])
        alert("User register successfully")
      }
    })
  }

  
}
