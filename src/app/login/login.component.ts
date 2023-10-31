import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('abc@gmail.com'),
    password: new FormControl('abc')
  })


  login() {
    this.authenticationService.userLogin(this.loginForm.value).subscribe((success: any) => {
      if (success) {
        this.router.navigate(['/welcome'], {
          queryParams: {
            email: this.loginForm.value.email
          }
        })
      }
    }, (error) => {
      alert('Invalid credential')
    })
  }

}
