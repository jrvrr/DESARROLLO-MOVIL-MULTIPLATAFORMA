import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidiosPage } from './pedidios.page';

describe('PedidiosPage', () => {
  let component: PedidiosPage;
  let fixture: ComponentFixture<PedidiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
