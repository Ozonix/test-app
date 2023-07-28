import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { MonitorComponent } from './pages/monitor/monitor.component';

const routes: Routes = [
  {
    path: 'pages',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'monitor',
        pathMatch: 'full'
      },
      {
        path: 'monitor',
        component: MonitorComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'pages'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {}
