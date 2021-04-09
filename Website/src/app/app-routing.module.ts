import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnonymousLayoutComponent } from './layout/anonymous/anonymous-layout/anonymous-layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [ 
  {
    path: '',
    component: AnonymousLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
