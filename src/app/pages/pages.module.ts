import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';

// Custom Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphisc1Component } from './graphisc1/graphisc1.component';
import { PagesComponent } from './pages.component';
import { AccoountSettingsComponent } from './accoount-settings/accoount-settings.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Graphisc1Component,
    PagesComponent,
    ProgressComponent,
    AccoountSettingsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
	PagesRoutingModule,
  ],
  exports: [
    DashboardComponent,
    Graphisc1Component,
    PagesComponent,
    ProgressComponent,
	AccoountSettingsComponent,
  ]
})
export class PagesModule { }
