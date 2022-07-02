import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphisc1Component } from './graphisc1/graphisc1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphisc1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphisc1Component,
    PagesComponent
  ]
})
export class PagesModule { }
