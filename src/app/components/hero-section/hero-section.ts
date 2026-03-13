import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from '../../services/project';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
@Component({
  selector: 'app-hero-section',
  imports: [CommonModule,RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection implements OnInit, OnDestroy {
  private projectService = inject(ProjectService);
  
  projects = signal<Project[]>(this.projectService.getProjects().sort((a, b) => b.weight - a.weight));
  currentIndex = signal(0);
  selectedProject: Project | null = null;
  private autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay(); // Sécurité
    this.autoPlayInterval = setInterval(() => {
      this.nextProject();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }


  manualNext() {
    this.stopAutoPlay();
    this.nextProject();
    this.startAutoPlay();
  }

  manualPrev() {
    this.stopAutoPlay();
    this.prevProject();
    this.startAutoPlay();
  }

  goToIndex(index: number) {
    this.stopAutoPlay();
    this.currentIndex.set(index);
    this.startAutoPlay();
  }

  openProject(project: Project) {
    this.stopAutoPlay(); // Arrête le défilement quand on regarde un projet
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
    this.startAutoPlay(); // Reprend le défilement quand on ferme
  }

  scrollToAbout() {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  handleUniverseClick() {
    if (window.innerWidth < 768) {
      // Sur Mobile : Scroll vers le carrousel
      const carousel = document.getElementById('project-carousel');
      carousel?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Sur Desktop : Scroll vers la section About
      this.scrollToAbout();
    }
  }

  // Modifie nextProject pour inclure la carte "Voir tout"
  nextProject() {
    // On va jusqu'à length (l'index de la carte spéciale)
    this.currentIndex.update(val => (val + 1) % (this.projects().length + 1));
  }

  prevProject() {
    this.currentIndex.update(val => (val - 1 + (this.projects().length + 1)) % (this.projects().length + 1));
  }
}