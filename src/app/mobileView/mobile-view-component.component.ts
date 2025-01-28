import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrandingService } from '../branding.service';

@Component({
  selector: 'app-mobile-view-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './mobile-view-component.component.html',
  styleUrl: './mobile-view-component.component.css'
})
export class MobileViewComponentComponent {


backgroundColor:string;
brandColor:string;
accentColor:string;
fontType:string;
buttonShape:string;



constructor(private router: Router){

const state = this.router.getCurrentNavigation()?.extras.state;

this.backgroundColor = state?.['backgroundColor'] ;
this.brandColor = state?.['brandColor'] ;
this.accentColor = state?.['accentColor'] ;
this.fontType = state?.['fontType'] ;
this.buttonShape = state?.['buttonShape'] 

}


}
