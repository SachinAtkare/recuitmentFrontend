import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { L2StatusComponent } from './l2-status/l2-status.component';
import { PositionStatusComponent } from './position-status/position-status.component';
import { HRDashboardComponent } from './hrdashboard/hrdashboard.component';
import { RequestPostionsComponent } from './request-postions/request-postions.component';
import { GenerateRequestComponent } from './generate-request/generate-request.component';

export const routes: Routes = [
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'l2',
    component:L2StatusComponent
  },
  {
    path:'status',
    component:PositionStatusComponent
  },
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'
  },
  {
    path:'hrdashboard',
    component:HRDashboardComponent
  },
  {
    path:'generate-request',
    component:GenerateRequestComponent
  }
];
