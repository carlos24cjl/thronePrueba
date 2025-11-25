import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PersonajesService, Character } from '../../services/personajes.service';

@Component({
  selector: 'app-personaje',
  imports: [CommonModule, RouterLink],
  templateUrl: './personaje.html',
  styleUrl: './personaje.css',
})
export class Personaje implements OnInit {
  @Input() id?: string;
  
  personaje: Character = {
    id: 0,
    firstName: '',
    lastName: '',
    fullName: '',
    title: '',
    family: '',
    image: '',
    imageUrl: ''
  };

  constructor(
    private route: ActivatedRoute,
    private personajesService: PersonajesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID del personaje:', id);
    if (id) {
      this.personajesService.getCharacterById(+id).subscribe({
        next: (data) => {
          console.log('Datos del personaje:', data);
          this.personaje = data;
        },
        error: (error) => {
          console.error('Error al cargar personaje:', error);
        }
      });
    }
  }

  getCharacterTitle2(title: string): string {
    return title || 'Sin título';
  }

  getFamilyColors(family: string): any {
    const familyColors: any = {
      'Stark': { color: '#A8A8A8', 'font-weight': 'bold' },
      'Lannister': { color: '#D4AF37', 'font-weight': 'bold' },
      'Targaryen': { color: '#8B0000', 'font-weight': 'bold' },
      'Baratheon': { color: '#FFD700', 'font-weight': 'bold' },
      'Greyjoy': { color: '#2F4F4F', 'font-weight': 'bold' },
      'Tyrell': { color: '#228B22', 'font-weight': 'bold' },
      'Martell': { color: '#FF8C00', 'font-weight': 'bold' }
    };
    return familyColors[family] || { color: '#c5a46d', 'font-weight': 'bold' };
  }
}
