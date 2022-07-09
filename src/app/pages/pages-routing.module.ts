import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccoountSettingsComponent } from './accoount-settings/accoount-settings.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphisc1Component } from './graphisc1/graphisc1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [
  { 
    path: 'dashboard',
	component: PagesComponent,
    children: [
		{ path: '', component: DashboardComponent },
		{ path: 'graphic1', component: Graphisc1Component },
		{ path: 'progress', component: ProgressComponent },
		{ path: 'account-settings', component: AccoountSettingsComponent },
		//{ path: 'path/:routeParam', component: MyComponent },
		//{ path: 'staticPath', component: ... },
		//{ path: '**', component: ... },
		//{ path: 'oldPath', redirectTo: '/staticPath' },
		//{ path: ..., component: ..., data: { message: 'Custom' }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


