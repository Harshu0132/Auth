import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  userLogin(data: object) {
    let url = `http://localhost:3000/api/login`
    return this.http.post(url, data);
  }

  userRegister(data: object) {
    let url = `http://localhost:3000/api/createUser`
    return this.http.post(url, data);
  }

  userDetails(data: object) {
    let url = `http://localhost:3000/api/getUserDetails`
    return this.http.post(url, data);
  }


}
