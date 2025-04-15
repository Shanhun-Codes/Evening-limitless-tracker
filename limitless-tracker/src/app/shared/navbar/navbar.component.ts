import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isAuth = false;

  constructor() {
    this.authService.getAuthStatus().subscribe((authStatus) => {
      this.isAuth = authStatus;
    });
  }

  logoutHandler() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }
}
