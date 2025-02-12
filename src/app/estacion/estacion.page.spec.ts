import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstacionPage } from './estacion.page';

describe('EstacionPage', () => {
  let component: EstacionPage;
  let fixture: ComponentFixture<EstacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
