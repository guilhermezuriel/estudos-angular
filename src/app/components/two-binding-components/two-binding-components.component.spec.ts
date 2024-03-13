import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindingComponentsComponent } from './two-binding-components.component';

describe('TwoBindingComponentsComponent', () => {
  let component: TwoBindingComponentsComponent;
  let fixture: ComponentFixture<TwoBindingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoBindingComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoBindingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
