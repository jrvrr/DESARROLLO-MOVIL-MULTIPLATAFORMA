import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../services/pedido.service';

@Component({
  standalone: false,
  selector: 'app-fase1',
  templateUrl: './fase1.page.html',
  styleUrls: ['./fase1.page.scss'],
})
export class Fase1Page {
  pedido = { titulo: '', descripcion: '', medidas: '', imagen: null as File | null };

  constructor(private navCtrl: NavController, private pedidoService: PedidoService) {} // Asegúrate de inyectar el servicio aquí

  subirPedido() {
    this.pedidoService.setPedido(this.pedido); // Guarda los datos en el servicio
    this.navCtrl.navigateForward('/fase2'); // Navega a fase2
  }

  onFileSelected(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.pedido.imagen = file;
      console.log('Imagen seleccionada:', file);
    }
  }
}
