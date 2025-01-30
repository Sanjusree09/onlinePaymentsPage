import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {DashboardComponent} from  './dashboard/dashboard.component';
import {MockComponent} from './mock-component/mock-component.component';
@Component({
  selector: 'app-root',
standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlinePaymentsPage';

constructor(private router: Router){
this.router.navigate(['/dashboard']);
}}
