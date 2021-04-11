import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    AnonymousTopNavComponent,
    AnonymousFooterComponent,
    AnonymousLayoutComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
