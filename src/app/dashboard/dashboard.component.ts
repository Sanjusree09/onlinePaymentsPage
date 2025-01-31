import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MockComponent} from '../mock-component/mock-component.component';

import {MockComponent1Component} from '../mock-component1/mock-component1.component';
import { BrandingService } from '../branding.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, MockComponent, MockComponent1Component],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(private brandingService: BrandingService, private router: Router){}

logoUrl: string = 'https://financialit.net/sites/default/files/financial_it_blog_1920_x_1080_px_1_66.png';
backgroundColor: string = '#040947';
brandColor: string = '#E1E6FF';  
accentColor: string = '#ECECEC';
fontType: string = 'Arial, sans-serif';
buttonShape ='rounded';

isMenuOpen: boolean = false;

onLogoUpload(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.logoUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}


toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
updateBgColor(color: string): void {
  this.backgroundColor = color;
}
updateBrColor(color: string): void {
  this.brandColor = color;
}
updateAccentColor(color: string): void {
  this.accentColor = color;
}
updateFontType(font: string): void {
  this.fontType = font;
}
updateButtons(buttons: string): void {
  this.buttonShape = buttons;
}

initialBrandingData = {
  logoUrl: this.logoUrl,
  backgroundColor: this.backgroundColor,
  fontType: this.fontType,
  accentColor: this.accentColor,
  brandColor: this.brandColor,
  buttonShape: this.buttonShape
};

updateBranding() {
  
  const isModified = 
    this.logoUrl !== this.initialBrandingData.logoUrl || 
    this.backgroundColor !== this.initialBrandingData.backgroundColor || 
    this.fontType !== this.initialBrandingData.fontType ||
    this.accentColor !== this.initialBrandingData.accentColor ||
    this.brandColor !== this.initialBrandingData.brandColor ||
    this.buttonShape !== this.initialBrandingData.buttonShape;

  
  if (isModified) {
    const updatedData = {
      logoUrl: this.logoUrl,
      backgroundColor: this.backgroundColor,
      fontType: this.fontType,
      accentColor: this.accentColor,
      brandColor: this.brandColor,
      buttonShape: this.buttonShape
    };

   
    this.brandingService.saveBrandingData(updatedData);
    alert("Branding updated successfully!");
  } else {
    alert("No changes detected. Please modify at least one field.");
  }
}

mobileViewComponent(){
this.router.navigate(['/mobileViewComponent'])
}
}


