import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenateDashboardComponent } from './components/senate-dashboard/senate-dashboard.component';
import { DeputyDashboardComponent } from './components/deputy-dashboard/deputy-dashboard.component';
import { SenateDetailsComponent } from './components/senate-details/senate-details.component';
import { DeputyDetailsComponent } from './components/deputy-details/deputy-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/senadores', pathMatch: 'full' },
  { path: 'senadores', component: SenateDashboardComponent },
  { path: 'senador/:id', component: SenateDetailsComponent },
  { path: 'diputados', component: DeputyDashboardComponent },
  { path: 'diputado/:id', component: DeputyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
