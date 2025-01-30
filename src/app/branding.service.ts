import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandingService {
 private brandingDataKey = 'brandingData'; 
 private brandingDataKeyMobile = 'brandingDataMobile';

  constructor() {}

  saveBrandingData(data: {logoUrl:string; brandColor:string;  backgroundColor: string; accentColor:string; buttonShape:string;  fontType: string }) {
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



  saveBrandingDataMobile(data: {logoUrl:string; brandColor:string;  accentColor:string; buttonShape:string;  fontType: string }) {
    localStorage.setItem(this.brandingDataKeyMobile, JSON.stringify(data));
  }

  getBrandingDataMobile() {
    const data = localStorage.getItem(this.brandingDataKeyMobile);
    console.log(data);
    return data ? JSON.parse(data) : null;
  }

  clearBrandingDataMobile() {
    localStorage.removeItem(this.brandingDataKeyMobile);
  }
}
