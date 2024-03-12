import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponentsComponent } from './events-components.component';

describe('EventsComponentsComponent', () => {
  let component: EventsComponentsComponent;
  let fixture: ComponentFixture<EventsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
