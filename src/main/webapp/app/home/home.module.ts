import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Um2020SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Um2020SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Um2020HomeModule {}
