import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'page1', component: FirstComponent },
    { path: 'page2', component: SecondComponent },
];
