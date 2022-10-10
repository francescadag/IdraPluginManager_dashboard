import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbIconModule, NbToggleModule } from '@nebular/theme';
import { MockDataModule } from 'app/@core/mock/mock-data.module';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbToggleModule,
    NbAccordionModule,
    MockDataModule,
    NbButtonModule,
    NbIconModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
