import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

const AUTH_API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin: boolean;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('token')) {
      this.isLoggedin = true;
    }
  }

  async login(email: string, password: string) {
    try {
      const data = await this.http.post<any>(AUTH_API + '/login', { email, password }).toPromise();
      localStorage.setItem('token', data.token);
      localStorage.setItem('tokenExpAt', jwt_decode<any>(data.token).exp);
      this.isLoggedin = true;
      this.router.navigate(['/index'])
    } catch (err) {
      console.log(err);
    }
  }

  logout() {
    localStorage.clear();
    this.isLoggedin = false;
    this.router.navigate([''])
  }
}
