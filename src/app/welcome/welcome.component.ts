import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor(private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute) {

  }

  userDetails: any = {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.authenticationService.userDetails({ email: params.email }).subscribe((success:any) => {
        this.userDetails = success
        console.log(this.userDetails);
        alert(`User login done successfully`)
      })
    })
  }
}
