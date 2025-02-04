import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private modalController: ModalController) { }
  ngOnInit() {
  }

  closeModal() { 
    this.modalController.dismiss(); // ✅ Correcto: ahora está dentro de un método
  }
}
