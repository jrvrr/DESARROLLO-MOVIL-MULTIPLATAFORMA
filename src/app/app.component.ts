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
    this.router.navigate(['/home']);
  }

  async openLoginModal() {
    const content = document.getElementById('main-content');
    if (content) content.setAttribute('inert', 'true'); // Desactiva interacciones
  
    const modal = await this.modalController.create({
      component: LoginPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
      backdropDismiss: true,
    });
  
    modal.onDidDismiss().then(() => {
      if (content) content.removeAttribute('inert'); // Reactiva interacciones
    });
  
    await modal.present();
  

}
}
