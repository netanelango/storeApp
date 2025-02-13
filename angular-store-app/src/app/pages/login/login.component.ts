import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    console.log('Formulaire valide ?', this.loginForm.valid);
    console.log('Valeurs du formulaire :', this.loginForm.value);

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (user) => {
          if (user.length) {
            this.authService.setUser(user[0]);
            this.router.navigate(['/']);
          } else {
            this.errorMessage = 'Email ou mot de passe incorrect';
          }
        },
        (error) => {
          console.error('Erreur lors de la connexion:', error);
          this.errorMessage = 'Une erreur est survenue lors de la connexion';
        }
      );
    }
  }

}
