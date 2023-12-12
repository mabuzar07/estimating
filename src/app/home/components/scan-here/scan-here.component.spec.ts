import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanHereComponent } from './scan-here.component';

describe('ScanHereComponent', () => {
  let component: ScanHereComponent;
  let fixture: ComponentFixture<ScanHereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanHereComponent]
    });
    fixture = TestBed.createComponent(ScanHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
