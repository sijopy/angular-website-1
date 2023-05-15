import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitSucessfullComponent } from './submit-sucessfull.component';

describe('SubmitSucessfullComponent', () => {
  let component: SubmitSucessfullComponent;
  let fixture: ComponentFixture<SubmitSucessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitSucessfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitSucessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
