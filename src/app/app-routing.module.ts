import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponents = [
  HeroesComponent, 
  HeroDetailComponent, 
  MessagesComponent,
  DashboardComponent,
  HeroSearchComponent
]
