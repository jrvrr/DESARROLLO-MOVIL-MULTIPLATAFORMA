import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedido: any = null;

  constructor() {}

  setPedido(data: any) {
    this.pedido = data;
  }

  getPedido() {
    return this.pedido;
  }
}
