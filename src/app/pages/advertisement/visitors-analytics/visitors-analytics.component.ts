import { Component, OnDestroy } from '@angular/core';
import { OutlineData, VisitorsAnalyticsData } from 'src/app/@core/data/visitors-analytics';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-visitors-analytics',
  templateUrl: './visitors-analytics.component.html',
  styleUrls: ['./visitors-analytics.component.scss']
})
export class VisitorsAnalyticsComponent implements OnDestroy {
  private alive = true;

  pieChartValue: number;
  chartLegend: { iconColor: string; title: string }[];
  visitorsAnalyticsData: { innerLine: number[]; outerLine: OutlineData[]; };

  constructor(private themeService: NbThemeService,
    private visitorsAnalyticsChartService: VisitorsAnalyticsData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });

    forkJoin(
      this.visitorsAnalyticsChartService.getInnerLineChartData(),
      this.visitorsAnalyticsChartService.getOutlineLineChartData(),
      this.visitorsAnalyticsChartService.getPieChartData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([innerLine, outerLine, pieChartValue]: [number[], OutlineData[], number]) => {
        this.visitorsAnalyticsData = {
          innerLine: innerLine,
          outerLine: outerLine,
        };

        this.pieChartValue = pieChartValue;
      });
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.firstIcon,
        title: 'Unique Visitors',
      },
      {
        iconColor: visitorsLegend.secondIcon,
        title: 'Page Views',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
