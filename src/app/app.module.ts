import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OgrodjeComponent } from './ogrodje/ogrodje.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { Router, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouterModule } from './app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    OgrodjeComponent,
    LandingPageComponent,
    PortfolioComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
