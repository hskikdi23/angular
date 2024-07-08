import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title = 'home';
description = "Mon expertise actuelle inclut le C, le C++ et du JS (nodeJS via nest et svelte pour le front). Cependant, je reste ouvert à d'autres opportunités dans diverses branches du développement, car je suis toujours à la recherche de nouveaux défis et que ma formation m'a appris en premier lieu à être autonome et à apprendre rapidement.";
}
