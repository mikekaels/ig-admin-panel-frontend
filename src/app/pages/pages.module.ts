import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NbIconModule, NbMenuModule, NbLayoutModule, NbSidebarModule, NbContextMenuModule } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdvertisementModule } from './advertisement/advertisement.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    AdvertisementModule,
    PagesRoutingModule,
    NbIconModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    NbContextMenuModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
