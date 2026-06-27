import { Component,inject } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project';
@Component({
  selector: 'app-home',
  imports: [HeroSection, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private projectService = inject(ProjectService);

// Calcul du texte dynamique
get projectCountDisplay(): string {
  const count = this.projectService.getProjects().length;
  if (count > 10) return "10+";
  if (count > 5) return "05+";
  if (count > 0) return `0${count}+`; // Affiche 03+ si tu as 3 projets
  return "0";
}
}
