import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandingService {
 private brandingDataKey = 'brandingData'; 

  constructor() {}

  saveBrandingData(data: {brandColor:string;  backgroundColor: string; accentColor:string; buttonShape:string;  fontType: string }) {
    localStorage.setItem(this.brandingDataKey, JSON.stringify(data));
  }

  getBrandingData() {
    const data = localStorage.getItem(this.brandingDataKey);
    console.log(data);
    return data ? JSON.parse(data) : null;
  }

  clearBrandingData() {
    localStorage.removeItem(this.brandingDataKey);
  }
}
