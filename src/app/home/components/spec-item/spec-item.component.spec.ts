import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecItemComponent } from './spec-item.component';

describe('SpecItemComponent', () => {
  let component: SpecItemComponent;
  let fixture: ComponentFixture<SpecItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecItemComponent]
    });
    fixture = TestBed.createComponent(SpecItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
