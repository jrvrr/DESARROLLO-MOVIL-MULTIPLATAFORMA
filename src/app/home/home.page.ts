import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';


@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  productos = [
    { image: 'assets/icon/carrusel/producto1.jpg', title:'Anuncios Luminosos', description:'Anuncios brillantes y llamativos' },
    { image: 'assets/icon/carrusel/producto2.jpg', title:'Letras 3D', description:'Letras tridimensionales para darle un toque de modernidad y elegancia a la señalización de tu negocio.' },
    { image: 'assets/icon/carrusel/producto3.png', title:'Señalética', description:'Señales viales o publicitarias de acuerdo a las necesidades del cliente.' },
    { image: 'assets/icon/carrusel/producto4.jpg', title:'Estructuras', description:'Todo tipo de estructuras publicitarias a tus necesidades.' },
    { image: 'assets/icon/carrusel/producto5.jpg', title:'Preciadores y tarifarios', description:'Estructuras publicitarias independientes que destacan en cualquier entorno.' },
    { image: 'assets/icon/carrusel/producto6.jpg', title:'Estación De Servicio', description:'Señalización y anuncios específicos para estaciones de servicio y gasolineras.' }
  ];
  servicios = [
    { image: 'assets/icon/carrusel/servicio1.jpg', title: 'Corte y Grabado Láser', description: 'Precisión y detalle en cada corte y grabado para personalizar tus anuncios.' },
    { image: 'assets/icon/carrusel/servicio2.jpg', title:'Impresión', description:'Impresión de alta calidad para todos tus materiales publicitarios.' },
    { image: 'assets/icon/carrusel/servicio3.jpg', title:'Rotulación', description:'Rotulación profesional para vehículos, vitrinas y más.' },
    { image: 'assets/icon/carrusel/servicio4.jpg', title:'Mantenimiento', description:'Servicios de mantenimiento para asegurar que tus anuncios siempre luzcan impecables.' },
  ];

  currentIndexProd = 0;
  currentIndexServ = 0;

  constructor(private modalController: ModalController) {

  }

  
  prevSlideProd() {
    this.currentIndexProd = (this.currentIndexProd - 1 + this.productos.length) % this.productos.length;
  }

  nextSlideProd() {
    this.currentIndexProd = (this.currentIndexProd + 1) % this.productos.length;
  }

  prevSlideServ() {
    this.currentIndexServ = (this.currentIndexServ - 1 + this.servicios.length) % this.servicios.length;
  }

  nextSlideServ() {
    this.currentIndexServ = (this.currentIndexServ + 1) % this.servicios.length;
  }

    async openLoginModal() {
      // Desactiva las interacciones en el contenido principal mientras el modal está abierto
      const content = document.getElementById('main-content');
      if (content) content.setAttribute('inert', 'true'); // Desactiva interacciones
    
      const modal = await this.modalController.create({
        component: LoginPage,
        breakpoints: [0, 1, 1],
        initialBreakpoint: 1,
      });
    
      // Reactiva las interacciones al cerrar el modal
      modal.onDidDismiss().then(() => {
        if (content) content.removeAttribute('inert'); // Reactiva interacciones
      });
    
      await modal.present();
    }
}
