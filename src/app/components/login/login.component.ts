import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  message: string = '';
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    this.message = '';
    const usernameControl = this.form.get('username');
    const passwordControl = this.form.get('password');
    if (usernameControl && passwordControl) {
      //const username = usernameControl.value;
      //const password = passwordControl.value;
      /*this.authService.login(username, password).subscribe({
        next: (token) => {
          this.message = 'Success';
          // hacer que aparezca un algo con los datos del perfil.
          this.form.reset();
          this.authService.setUser(1); // always puts id = 1
        },
        error: (e) => {
          this.message = e;
        },
      });*/
    }
  }
}
