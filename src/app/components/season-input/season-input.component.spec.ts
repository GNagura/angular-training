import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonInputComponent } from './season-input.component';

describe('SeasonInputComponent', () => {
  let component: SeasonInputComponent;
  let fixture: ComponentFixture<SeasonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeasonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
