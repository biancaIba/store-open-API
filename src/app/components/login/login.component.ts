import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    this.message = '';
    const usernameControl = this.form.get('username');
    const passwordControl = this.form.get('password');
    if (usernameControl && passwordControl) {
      const username = usernameControl.value;
      const password = passwordControl.value;
      this.authService.login(username, password).subscribe((token: string) => {
        this.message = 'Login exitoso';
        // hacer que aparezca un algo con los datos del perfil.
        this.form.reset();
        //this.authService.setUser(1);
      });
    }
  }

}
