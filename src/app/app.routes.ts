import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import {Contact} from './components/contact/contact';
import {ProjectList} from "./components/project-list/project-list";
import { Login } from './components/admin/login/login';
import { AdminDashboard } from './components/admin/admin-dashboard/admin-dashboard';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projets', component: ProjectList },
  { path: 'contact', component: Contact }, // À créer
  { path: 'login', component: Login},
  { path: 'admin/dashboard', component: AdminDashboard },
  { path: '**', redirectTo: '' } // Redirige vers l'accueil si l'URL est inconnue
];