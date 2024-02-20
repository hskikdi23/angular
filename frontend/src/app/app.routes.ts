import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortefolioComponent } from './portefolio/portefolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contact', component:ContactComponent},
    { path: 'about', component:AProposComponent},
    { path: 'portefolio', component:PortefolioComponent},
    { path: '**', component:NotFoundComponent}
];
