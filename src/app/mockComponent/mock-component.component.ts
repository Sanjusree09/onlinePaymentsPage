import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mock-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './mock-component.component.html',
  styleUrl: './mock-component.component.css'
})
export class MockComponent {


@Input() backgroundColor: string = '';
@Input() fontType: string='';
@Input() accentColor: string='';




}
