import { Component } from '@angular/core';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {

  icons = [
    {src : '../../assets/angularIcon.png', alt:'angularIcon'},
    {src : '../../assets/cplus.png', alt:'cplusIcon'},
    {src : '../../assets/dockerIcon.png', alt:'dockerIcon'},
    {src : '../../assets/jsIcon.png', alt:'jsIcon'},
    {src : '../../assets/nestIcon.png', alt:'nestIcon'},
    {src : '../../assets/postgressIcon.png', alt:'pgIcon'},
    {src : '../../assets/svelteIcon.png', alt:'svelteIcon'},
  ];

  

}
