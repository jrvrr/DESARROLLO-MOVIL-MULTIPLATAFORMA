import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../services/pedido.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import jsPDF from 'jspdf';

@Component({
  standalone: false,
  selector: 'app-fase2',
  templateUrl: './fase2.page.html',
  styleUrls: ['./fase2.page.scss'],
})
export class Fase2Page implements OnInit {
  pedido: any;
  pdfSrc: SafeResourceUrl | undefined;

  constructor(private navCtrl: NavController, private pedidoService: PedidoService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.pedido = this.pedidoService.getPedido(); // Recupera el pedido
    this.generarPDF();
  }

  generarPDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Pedido', 20, 20);

    doc.setFontSize(14);
    doc.text(`Título: ${this.pedido.titulo}`, 20, 40);
    doc.text(`Descripción: ${this.pedido.descripcion}`, 20, 50);
    doc.text(`Medidas: ${this.pedido.medidas}`, 20, 60);

    const pdfData = doc.output('datauristring'); // Convierte el PDF a base64
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(pdfData);
  }

  continuar() {
    this.navCtrl.navigateForward('/fase3');
  }
}
