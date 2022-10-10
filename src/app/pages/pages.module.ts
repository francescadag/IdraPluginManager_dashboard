import { NgModule } from '@angular/core';
import { NbMenuModule, NbToggleModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbToggleModule,
    DashboardModule,
    NbEvaIconsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
