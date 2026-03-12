import { Component, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/project';
import { Project } from '../../models/project';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  // 1. On injecte le service (méthode moderne Angular 19)
  private projectService = inject(ProjectService);

  // 2. On récupère les données du service, on les trie et on les met dans le signal
  projects = signal<Project[]>(
    this.projectService.getProjects().sort((a, b) => b.weight - a.weight)
  );

  selectedProject: Project | null = null;

  // Tes méthodes de scroll et d'overlay restent les mêmes...
  openProject(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
