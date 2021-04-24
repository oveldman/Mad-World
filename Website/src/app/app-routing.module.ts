import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutHandlerComponent } from './layout/layout-handler/layout-handler.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LoginComponent } from './pages/authentication/login/login.component';

import { AdminLayoutComponent } from './layout/admin/admin-layout/admin-layout.component';
import { AdminpanelComponent } from './pages/admin/adminpanel/adminpanel.component';

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
  {
    path: 'Admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminpanelComponent, pathMatch: 'full', canActivate: [AdminLayoutComponent]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminLayoutComponent]
})
export class AppRoutingModule { }
