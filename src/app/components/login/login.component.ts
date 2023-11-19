import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  message: string = '';
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email],[]],
      password: ['', [Validators.required]]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    this.message = '';
    const emailControl = this.form.get('email');
    const passwordControl = this.form.get('password');
    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;
      this.authService.login(email, password).subscribe((token: string) => {

      });
    }
  }

}
