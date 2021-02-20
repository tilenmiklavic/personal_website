import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }, {
    path: 'portfolio',
    component: PortfolioComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRouterModule { }