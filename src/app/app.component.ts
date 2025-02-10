import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private modalController: ModalController, private router: Router) {}

  ngOnInit(): void {
    // Redirige a 'home' solo si no hay una ruta activa
    if (this.router.url === '/' || this.router.url === '') {
      this.router.navigate(['/home']);
    }
  }

  /**
   * Método para registrar navegación
   */
  logNavegacion(ruta: string): void {
    console.log(`Navegando a: ${ruta}`);
  }

  /**
   * Abre el modal de inicio de sesión
   */
  async openLoginModal() {
    // Desactiva las interacciones en el contenido principal mientras el modal está abierto
    const content = document.getElementById('main-content');
    if (content) content.setAttribute('inert', 'true'); // Desactiva interacciones
  
    const modal = await this.modalController.create({
      component: LoginPage,
      breakpoints: [0, 1, 1],
      initialBreakpoint: 1,
      backdropDismiss: true, // Permite cerrar el modal al tocar el fondo
    });
  
    // Reactiva las interacciones al cerrar el modal
    modal.onDidDismiss().then(() => {
      if (content) content.removeAttribute('inert'); // Reactiva interacciones
    });
  
    await modal.present();
  }
}
