import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  message: string = '';
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  register(): void {
    this.message = '';
    const emailControl = this.form.get('email');
    const passwordControl = this.form.get('password');
    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;
      this.authService.register(email, password).then((res: any) => {
        console.log(res);
        this.message = 'Success';
        this.form.reset();
        this.router.navigate(['']);
      });
    }
  }
}
