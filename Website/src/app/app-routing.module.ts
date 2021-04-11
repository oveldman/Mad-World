import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnonymousLayoutComponent } from './layout/anonymous/anonymous-layout/anonymous-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [ 
  {
    path: '',
    component: AnonymousLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Projects', component: ProjectsComponent, pathMatch: 'full' },
      { path: 'Resume', component: ResumeComponent, pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
