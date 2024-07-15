import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {

  icons = [
    {src : '../../assets/angular-icon-logo.png', alt:'angularIcon'},
    {src : '../../assets/cplus.png', alt:'cplusIcon'},
    {src : '../../assets/dockerIcon.png', alt:'dockerIcon'},
    {src : '../../assets/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png', alt:'jsIcon'},
    {src : '../../assets/nestIcon.png', alt:'nestIcon'},
    {src : '../../assets/postgressIcon.png', alt:'pgIcon'},
    {src : '../../assets/svelteIcon.png', alt:'svelteIcon'},
  ];

  

}
