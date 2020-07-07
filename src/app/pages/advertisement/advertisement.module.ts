import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { VisitorsAnalyticsComponent } from './visitors-analytics/visitors-analytics.component';
import { NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTableModule, NbSelectModule, NbListModule } from '@nebular/theme';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ECommerceVisitorsAnalyticsChartComponent } from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { SlideOutComponent } from './slide-out/slide-out.component';
import { ECommerceVisitorsStatisticsComponent } from './visitors-analytics/visitors-statistics/visitors-statistics.component';

@NgModule({
  declarations: [
    AdvertisementComponent,
    VisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceLegendChartComponent,
    ECommerceVisitorsStatisticsComponent,
    SlideOutComponent],
  imports: [
    CommonModule,
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
export class AdvertisementModule { }
