import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsersModule } from './pages/users/users.module';
import { MonitorModule } from './pages/monitor/monitor.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DashboardRoutingModule,
    UsersModule,
    MonitorModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
