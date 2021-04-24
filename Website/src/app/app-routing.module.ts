import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutHandlerComponent } from './layout/layout-handler/layout-handler.component'
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LoginComponent } from './pages/authentication/login/login.component';

const routes: Routes = [ 
  {
    path: '',
    component: LayoutHandlerComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Login', component: LoginComponent, pathMatch: 'full' },
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
