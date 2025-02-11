import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'; // Asegúrate de importar correctamente
import { DataService } from '../services/data.service';

@Component({
  standalone: false,
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  phases = [
    { title: 'Fase 1', description: 'Pedido', route:'/fase1', pdf: 'fase1.pdf' },
    { title: 'Fase 2', description: 'Propuesta de la empresa', route:'/fase2', pdf: 'fase2.pdf' },
    { title: 'Fase 3', description: 'Confirmación del cliente', route:'/fase3', pdf: 'fase3.pdf' },
    { title: 'Fase 4', description: 'Fecha de entrega', route:'/fase4', pdf: 'fase4.pdf' }
  ];

  visible: boolean = false;
  menu: string = '';

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {

    const menu = this.route.snapshot.paramMap.get('menu');
    const booleano = menu === 'true'; 
    this.menu = menu ?? '';
    this.enviarMensaje();
  }



  
  enviarMensaje() {
    this.dataService.cambiarMensaje(this.menu);
  }


  goToPhase(route: string) {
    this.navCtrl.navigateForward(route);
  }

  downloadPDF(pdfFile: string) {
    const link = document.createElement('a');
    link.href = `assets/pdf/${pdfFile}`;
    link.download = pdfFile;
    link.click();
  }
}
