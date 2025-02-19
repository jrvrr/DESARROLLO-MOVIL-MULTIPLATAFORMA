import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pedidios',
  templateUrl: './pedidios.page.html',
  styleUrls: ['./pedidios.page.scss'],
  standalone: false
})
export class PedidiosPage implements OnInit {

  visible: boolean = false;
  menu: string = '';

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}


  ngOnInit() {
    const menu = this.route.snapshot.paramMap.get('menu');
    const booleano = menu === 'true'; 
    this.menu = menu ?? '';
    this.enviarMensaje();
  }

  
  enviarMensaje() {
    this.dataService.cambiarMensaje(this.menu);
  }

}
