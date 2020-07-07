import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ContentComponent } from './content/content.component';
import { UserComponent } from './user/user.component';
import { SettingComponent } from './setting/setting.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'advertisement',
      component: AdvertisementComponent
    },
    {
      path: 'content',
      component: ContentComponent
    },
    {
      path: 'user',
      component: UserComponent
    },
    {
      path: 'setting',
      component: SettingComponent
    },
    {
      path: 'report',
      component: ReportComponent
    },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
