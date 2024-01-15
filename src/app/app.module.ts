import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RepresentativeCardComponent } from './components/representative-card/representative-card.component';
import { SenateDashboardComponent } from './components/senate-dashboard/senate-dashboard.component';
import { DeputyDashboardComponent } from './components/deputy-dashboard/deputy-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RepresentativeCardComponent,
    NavigationBarComponent,
    SenateDashboardComponent,
    DeputyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
