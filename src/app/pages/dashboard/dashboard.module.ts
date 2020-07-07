import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

import { ThemeModule } from 'src/app/@theme/theme.module';
import { NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTableModule, NbSelectModule, NbListModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent],
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTableModule,
    NbSelectModule,
    NbListModule,
    NgxEchartsModule,
    NgxChartsModule,
  ]
})
export class DashboardModule { }
