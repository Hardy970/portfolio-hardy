import { Component,inject,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project';
import { Project } from '../../models/project';
import { ProjectModal } from '../project-modal/project-modal';
@Component({
  selector: 'app-project-list',
  imports: [ProjectModal, CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList {
  private projectService = inject(ProjectService);
  
  allProjects = signal<Project[]>(this.projectService.getProjects());
  selectedLanguage = signal<string>('All');
  selectedProject = signal<Project | null>(null);

  // Extraire la liste unique des langages pour les filtres
  languages = ['All', ...new Set(this.projectService.getProjects().flatMap(p => p.languages))];

  filteredProjects() {
    if (this.selectedLanguage() === 'All') return this.allProjects();
    return this.allProjects().filter(p => p.languages.includes(this.selectedLanguage()));
  }
}
