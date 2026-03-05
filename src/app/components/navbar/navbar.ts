import { Component , signal} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  // Signal pour suivre l'état du menu mobile
  isMenuOpen = signal(false);
  isProfilPicClicked = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
