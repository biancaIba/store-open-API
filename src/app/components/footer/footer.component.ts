import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  logged: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((res: any) => {
      if (res) this.logged = true;
    });
  }

  logOut(): void {
    this.authService.logOut().then((res: any) => {
      if (res) this.logged = false;
      location.reload(); // reload the web
      this.router.navigate(['']);
    });
  }
}
