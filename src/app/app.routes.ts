import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MockComponent} from './mock-component/mock-component.component';
import {MockComponent1Component} from './mock-component1/mock-component1.component';
import { MobileViewComponentComponent } from './mobile-view/mobile-view-component.component';

export const routes: Routes = [
{path:'dashboard', component:DashboardComponent},
{path:'mockComponent', component:MockComponent},
{path:'mockComponent1', component:MockComponent1Component},
{path:'mobileViewComponent', component:MobileViewComponentComponent},
{path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
