import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-fase4',
  templateUrl: './fase4.page.html',
  styleUrls: ['./fase4.page.scss'],
})
export class Fase4Page implements OnInit {
  fechaPedido: Date = new Date();
  fechaEntrega: Date = new Date();
  stars: number[] = [1, 2, 3, 4, 5];
  rating: number = 0;
  feedback = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {}

  ngOnInit() {
    // Calculamos la fecha de entrega (8 días después)
    this.fechaEntrega.setDate(this.fechaPedido.getDate() + 8);
  }

  setRating(rating: number): void {
    this.rating = rating;
  }

  async abrirCalificacion() {
    const modal = await this.modalCtrl.create({
      component: null, // Eliminar cualquier referencia a componentes externos
      componentProps: {},
      cssClass: 'custom-modal-class', // Si deseas aplicar estilos personalizados
    });
    await modal.present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  submitFeedback(): void {
    console.log('Feedback enviado:', this.feedback, 'Rating:', this.rating);
    // Aquí puedes manejar el envío de datos al servidor
  }
}
