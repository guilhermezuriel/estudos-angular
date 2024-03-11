import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveComponentsComponent } from './directive-components.component';

describe('DirectiveComponentsComponent', () => {
  let component: DirectiveComponentsComponent;
  let fixture: ComponentFixture<DirectiveComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
