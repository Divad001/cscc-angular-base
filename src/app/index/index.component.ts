import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  testValue$: any;

  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }

  test() {
    try {
      this.testValue$ = this.http.get<any>('http://localhost:8080/breweries');
    } catch (err) {
      this.logout();
    }
  }

  logout() {
    this.auth.logout();
  }
}
