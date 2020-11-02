import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
emailRegex:string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
passwordRegex:string = '(.*[A-Z].*)';

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex)]
        )],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.passwordRegex)]
        )],
    });
  }

  login() {
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
