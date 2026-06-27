import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = signal('');
  password = signal('');

  constructor(private router: Router) {}

  onLogin() {
    // On simulera la vérification ici plus tard avec le Backend
    if (this.username() === 'admin' && this.password() === '1234') {
      localStorage.setItem('isAdmin', 'true'); // Simulation temporaire
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Identifiants incorrects');
    }
  }
}
