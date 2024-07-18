import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import descriptions from '../../assets/descriptions-fr.json';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {

  icons = [
    {src : '../../assets/angular-icon-logo.png', alt:'angularIcon', description: descriptions.angular},
    {src : '../../assets/cplus.png', alt:'cplusIcon', description: descriptions.cplus},
    {src : '../../assets/dockerIcon.png', alt:'dockerIcon', description: descriptions.docker},
    {src : '../../assets/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png', alt:'jsIcon', description: descriptions.javascript},
    {src : '../../assets/nestIcon.png', alt:'nestIcon', description: descriptions.nest},
    {src : '../../assets/postgressIcon.png', alt:'pgIcon', description: descriptions.postgresql},
    {src : '../../assets/svelteIcon.png', alt:'svelteIcon', description: descriptions.svelte},
  ];
  selectedDescription: string | null = null;

  onSelect(iconDescription: string): void {
    this.selectedDescription = iconDescription;
  }
  

}
