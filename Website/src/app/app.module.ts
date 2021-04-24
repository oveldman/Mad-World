import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { AnonymousTopNavComponent } from './layout/anonymous/anonymous-top-nav/anonymous-top-nav.component';
import { AnonymousFooterComponent } from './layout/anonymous/anonymous-footer/anonymous-footer.component';
import { AnonymousLayoutComponent } from './layout/anonymous/anonymous-layout/anonymous-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout/admin-layout.component';
import { LayoutHandlerComponent } from './layout/layout-handler/layout-handler.component';
import { AdminTopNavComponent } from './layout/admin/admin-top-nav/admin-top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    AnonymousTopNavComponent,
    AnonymousFooterComponent,
    AnonymousLayoutComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    LoginComponent,
    AdminLayoutComponent,
    LayoutHandlerComponent,
    AdminTopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
