import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MockComponent} from './mockComponent/mock-component.component';
import {MockComponent1Component} from './mockComponent1/mock-component1.component';

export const routes: Routes = [
{path:'dashboard', component:DashboardComponent},
{path:'mockComponent', component:MockComponent},
{path:'mockComponent1', component:MockComponent1Component}
];
