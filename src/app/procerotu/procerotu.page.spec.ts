import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcerotuPage } from './procerotu.page';

describe('ProcerotuPage', () => {
  let component: ProcerotuPage;
  let fixture: ComponentFixture<ProcerotuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcerotuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
