import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../services/pedido.service';

@Component({
  standalone: false,
  selector: 'app-fase3',
  templateUrl: './fase3.page.html',
  styleUrls: ['./fase3.page.scss'],
})
export class Fase3Page implements OnInit {

  opciones = ['Sí, acepto la propuesta', 'Necesito modificaciones', 'No, rechazo la propuesta'];
  respuestaSeleccionada: string = '';
  mensajes = [
    { texto: 'Hola, ¿podemos ajustar el tamaño', tipo: 'cliente' },
    { texto: 'Claro, podemos revisar la propuesta.', tipo: 'empresa' },
  ];
  mensajeNuevo: string = '';

  pedido: any;

  constructor(
    private navCtrl: NavController,
    private pedidoService: PedidoService 
  ) {}

  ngOnInit() {
    this.pedido = this.pedidoService.getPedido(); 
  }

  confirmar() {
    console.log('Confirmación:', this.respuestaSeleccionada);
  }

  enviarMensaje() {
    if (this.mensajeNuevo.trim()) {
      this.mensajes.push({ texto: this.mensajeNuevo, tipo: 'cliente' });
      this.mensajeNuevo = '';
    }
  }

  continuar() {
    this.navCtrl.navigateForward('/fase4');
  }
}
