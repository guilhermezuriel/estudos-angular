import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalComponentsComponent } from './conditional-components.component';

describe('ConditionalComponentsComponent', () => {
  let component: ConditionalComponentsComponent;
  let fixture: ComponentFixture<ConditionalComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
