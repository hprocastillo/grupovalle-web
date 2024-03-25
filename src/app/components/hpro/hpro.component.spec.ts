import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HproComponent } from './hpro.component';

describe('HproComponent', () => {
  let component: HproComponent;
  let fixture: ComponentFixture<HproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HproComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
