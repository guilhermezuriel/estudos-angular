import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterComponentComponent } from './event-emitter-component.component';

describe('EventEmitterComponentComponent', () => {
  let component: EventEmitterComponentComponent;
  let fixture: ComponentFixture<EventEmitterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEmitterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventEmitterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
