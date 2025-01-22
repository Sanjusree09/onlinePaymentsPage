import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandingService {

saveBrandingChanges(branding:{backgroundColor:string}){
	localStorage.setItem('branding', JSON.stringify(branding));
 console.log('Branding saved to localStorage:', branding); 
}

getBrandingChanges():{backgroundColor:string} | null{

const branding = localStorage.getItem('branding');
console.log('Branding retrieved from localStorage:', branding); 
return branding ? JSON.parse(branding):null;

}

clearBrandingChanges():void{
localStorage.removeItem('branding');
console.log('Branding removed from localStorage'); 
}
}
