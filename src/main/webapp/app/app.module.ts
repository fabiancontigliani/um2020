import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Um2020SharedModule } from 'app/shared/shared.module';
import { Um2020CoreModule } from 'app/core/core.module';
import { Um2020AppRoutingModule } from './app-routing.module';
import { Um2020HomeModule } from './home/home.module';
import { Um2020EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Um2020SharedModule,
    Um2020CoreModule,
    Um2020HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Um2020EntityModule,
    Um2020AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Um2020AppModule {}
