import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuItem = [
    {label: "Portefolio", url:"/portefolio"},
    {label: "À propos", url:"/about"},
    {label: "Contact", url:"/contact"}
  ];

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigateByUrl('/');
  }

  goToLink(url: string){
    this.router.navigateByUrl(url);
  }

}
