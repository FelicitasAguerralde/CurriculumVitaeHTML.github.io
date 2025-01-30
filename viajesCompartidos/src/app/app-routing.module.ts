import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomovilesListComponent } from './automoviles-list/automoviles-list.component';
import { AutomovilesViajesComponent } from './automoviles-viajes/automoviles-viajes.component';
import { ViajesAboutComponent } from './viajes-about/viajes-about.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';


const routes: Routes = [
  {
    path: '',
    component: AutomovilesViajesComponent,
  },
  {
    path: 'home',
    component: AutomovilesViajesComponent,
  },
  {
    path: 'viajes',
    component: ViajesListComponent,
  },
  {
    path: 'automoviles',
    component: AutomovilesListComponent,
  },
  {
    path: 'about',
    component: ViajesAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
