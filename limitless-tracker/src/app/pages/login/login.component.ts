import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../shared/services/exercise.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isAuth = false;
  username = '';
  password = '';

  loginHandler() {
    this.authService
      .login(this.username, this.password)
      .subscribe((authStatus) => {
        this.isAuth = authStatus;
      });
    if (this.isAuth) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
    this.username = '';
    this.password = '';
  }
}
