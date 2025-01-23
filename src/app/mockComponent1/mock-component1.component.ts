import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mock-component1',
  imports: [CommonModule, FormsModule],
  templateUrl: './mock-component1.component.html',
})
export class MockComponent1Component {

@Input() brandColor: string = '';
@Input() fontType: string = '';
@Input() buttonShape: string = '';
@Input() accentColor: string = '';
@Input() logoUrl: string='';
}
