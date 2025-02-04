import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private modalController: ModalController) {}

  async openLoginModal() {
    const modal = await this.modalController.create({
      component: LoginPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
      backdropDismiss: true,
    });

    await modal.present();
  }

}
