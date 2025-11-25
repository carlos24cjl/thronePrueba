import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Personajes } from './components/personajes/personajes';
import { Personaje } from './components/personaje/personaje';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'personajes', component: Personajes},
  {path: 'personaje/detalle/:id', component: Personaje}
];
