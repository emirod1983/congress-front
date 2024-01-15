import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenateDashboardComponent } from './components/senate-dashboard/senate-dashboard.component';
import { DeputyDashboardComponent } from './components/deputy-dashboard/deputy-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/senadores', pathMatch: 'full' },
  { path: 'senadores', component: SenateDashboardComponent },
  { path: 'diputados', component: DeputyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
