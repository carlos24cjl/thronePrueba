import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonajesService, Character } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  imports: [RouterLink, CommonModule],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes implements OnInit {
  allPersonajes: Character[] = [];

  constructor(
    private personajesService: PersonajesService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('Personajes component constructor');
  }

  ngOnInit(): void {
    console.log('Personajes ngOnInit - Cargando personajes...');
    this.personajesService.getAllCharacters().subscribe({
      next: (data) => {
        console.log('Personajes recibidos:', data);
        console.log('Primer personaje:', data[0]);
        console.log('Cantidad de personajes:', data.length);
        this.allPersonajes = data;
        this.cdr.detectChanges();
        console.log('allPersonajes actualizado:', this.allPersonajes.length);
      },
      error: (error) => {
        console.error('Error al cargar personajes:', error);
      }
    });
  }
}
