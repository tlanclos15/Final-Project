import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { ComparisonGraphComponent } from './comparison-graph/comparison-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';
import { AboutComponent } from './about/about.component';
import { P404Component } from './p404/p404.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    HomepageComponent,
    ArticleComponent,
    SignUpComponent,
    SignInComponent,
    BarGraphComponent,
    ComparisonGraphComponent,
    DoughnutGraphComponent,
    AboutComponent,
    P404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
