import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphisc1Component } from './graphisc1/graphisc1.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graphisc1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    NopagefoundComponent
  ]
})
export class PagesModule { }
