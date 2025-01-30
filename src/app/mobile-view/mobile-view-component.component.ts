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

logoUrl: string = 'https://financialit.net/sites/default/files/financial_it_blog_1920_x_1080_px_1_66.png';
brandColor:string='';
accentColor:string='';
fontType:string='Arial, Sans-seriff';
buttonShape:string='';
isMenuOpen: boolean = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}


initialBrandingData = {
  logoUrl: this.logoUrl,
  fontType: this.fontType,
  accentColor: this.accentColor,
  brandColor: this.brandColor,
  buttonShape: this.buttonShape
};

updateBranding() {

  const isModified = 
    this.logoUrl !== this.initialBrandingData.logoUrl || 
    this.fontType !== this.initialBrandingData.fontType ||
    this.accentColor !== this.initialBrandingData.accentColor ||
    this.brandColor !== this.initialBrandingData.brandColor ||
    this.buttonShape !== this.initialBrandingData.buttonShape;

  if (isModified) {
    const updatedData = {
      logoUrl: this.logoUrl,
      fontType: this.fontType,
      accentColor: this.accentColor,
      brandColor: this.brandColor,
      buttonShape: this.buttonShape
    };

    
    this.brandingService.saveBrandingDataMobile(updatedData);
    alert("Branding updated successfully!");
  } else {
    alert("No changes detected. Please modify at least one field.");
  }
}





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

constructor(private router: Router, private brandingService: BrandingService){}


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



desktopView(){
this.router.navigate(['/dashboard']);
}
 
  
}
