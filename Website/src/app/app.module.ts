import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { AnonymousTopNavComponent } from './layout/anonymous/anonymous-top-nav/anonymous-top-nav.component';
import { AnonymousFooterComponent } from './layout/anonymous/anonymous-footer/anonymous-footer.component';
import { AnonymousLayoutComponent } from './layout/anonymous/anonymous-layout/anonymous-layout.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    AnonymousTopNavComponent,
    AnonymousFooterComponent,
    AnonymousLayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
