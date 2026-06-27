import { Injectable } from '@angular/core';
import { Project } from '../models/project';

const MOCK_PROJECTS: Project[] = [

  {

    id: 1,

    title: 'Eco-Tracker 🌿',

    description: 'Une application mobile pour suivre son empreinte carbone en temps réel via l\'analyse des achats.',

    images: ['images/eco-tracker.jpg','images/projets.png','images/projets.png'],

    languages: ['Flutter', 'Firebase', 'Python'],

    weight: 10,

    githubUrl: '...'

  },

  {

    id: 2,

    title: 'Nantes E-Sport Arena 🎮',

    description: 'Plateforme de gestion de tournois locaux avec mise à jour des scores en direct.',

    images: ['images/projets.png','images/gaming.jpg'],

    languages: ['Angular', 'Node.js', 'Socket.io'],

    weight: 8

  },

  {

    id: 3,

    title: 'Polytech Room Finder 📍',

    description: 'Système de navigation intérieure pour aider les nouveaux étudiants à trouver leurs salles à Polytech Nantes.',

    images: ['images/map.jpg','images/projets.png'],

    languages: ['React Native', 'Leaflet', 'PostgreSQL'],

    weight: 5

  },

  {

    id: 4,

    title: 'Cyber-Sentinel 🛡️',

    description: 'Outil de détection d\'anomalies réseau basé sur le Machine Learning pour prévenir les intrusions.',

    images: ['images/security.jpg','images/projets.png'],

    languages: ['Python', 'TensorFlow', 'Docker'],

    weight: 9

  }

];

@Injectable({
  providedIn: 'root',
})


export class ProjectService {
  // 2. On crée une méthode pour récupérer ces projets
  getProjects(): Project[] {
    return MOCK_PROJECTS;
  }
}
