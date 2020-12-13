import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinmaGlobalComponent } from './alinma-global.component';

describe('AlinmaGlobalComponent', () => {
  let component: AlinmaGlobalComponent;
  let fixture: ComponentFixture<AlinmaGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlinmaGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlinmaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
