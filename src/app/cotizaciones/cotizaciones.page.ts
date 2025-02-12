import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.page.html',
  styleUrls: ['./cotizaciones.page.scss'],
  standalone: false
})
export class CotizacionesPage implements OnInit {

  visible: boolean = false;
  menu: string = '';

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    const menu = this.route.snapshot.paramMap.get('menu');
    this.menu = menu ?? '';
    this.enviarMensaje();
  }

  enviarMensaje() {
    this.dataService.cambiarMensaje(this.menu);
  }

  items = [
    { title: 'rotulacion', image: 'assets/icon/rotulacion.jpg', route: '/procerotu' },
    { title: 'estacion', image: 'assets/icon/estacion.jpg', route: '/proceso' },
    { title: 'estructura', image: 'assets/icon/estructuras.jpg', route: '/proceso' },
    { title: 'otros', image: 'assets/icon/otros.jpg', route: '/proceso' }
  ];

  selectItem(item: any) {
    console.log('Producto seleccionado:', item);
    this.router.navigate([item.route]); 
  }
}
