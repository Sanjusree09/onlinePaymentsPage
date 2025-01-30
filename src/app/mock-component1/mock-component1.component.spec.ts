import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent1Component } from './mock-component1.component';

describe('MockComponent1Component', () => {
  let component: MockComponent1Component;
  let fixture: ComponentFixture<MockComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockComponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
