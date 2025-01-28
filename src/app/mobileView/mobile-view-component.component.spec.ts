import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileViewComponentComponent } from './mobile-view-component.component';

describe('MobileViewComponentComponent', () => {
  let component: MobileViewComponentComponent;
  let fixture: ComponentFixture<MobileViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileViewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
