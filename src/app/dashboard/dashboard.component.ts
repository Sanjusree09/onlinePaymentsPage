import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MockComponent} from '../mockComponent/mock-component.component';
import {MockComponent1Component} from '../mockComponent1/mock-component1.component';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, MockComponent, MockComponent1Component],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  logoUrl: string = 'https://financialit.net/sites/default/files/financial_it_blog_1920_x_1080_px_1_66.png';
  backgroundColor: string = '#040947';
  brandColor: string = '#E1E6FF';  
  accentColor: string = '#ECECEC';
  fontType: string = 'Arial, sans-serif';
  buttonShape='rounded';
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

}


