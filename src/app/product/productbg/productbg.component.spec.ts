import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbgComponent } from './productbg.component';

describe('ProductbgComponent', () => {
  let component: ProductbgComponent;
  let fixture: ComponentFixture<ProductbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
