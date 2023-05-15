import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStickyComponent } from './footer-sticky.component';

describe('FooterStickyComponent', () => {
  let component: FooterStickyComponent;
  let fixture: ComponentFixture<FooterStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterStickyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
