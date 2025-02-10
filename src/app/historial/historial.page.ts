import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  standalone: false,
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  fechaPedido: Date = new Date();
  fechaEntrega: Date = new Date();
  estadoPedido: string = 'En proceso';
  historialCalificaciones = [
    {
      name: 'Juan',
      lastName: 'Pérez',
      message: 'Excelente servicio',
      rating: 5,
    },
    {
      name: 'Ana',
      lastName: 'García',
      message: 'Muy buena atención',
      rating: 4,
    },
  ];

  ngOnInit() {
    this.fechaEntrega.setDate(this.fechaPedido.getDate() + 8);
  }

  descargarPDF() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Historial del Pedido', 10, 10);
    doc.setFontSize(12);

    // Resumen del Pedido
    doc.text(`Pedido realizado: ${this.fechaPedido.toDateString()}`, 10, 20);
    doc.text(`Fecha estimada de entrega: ${this.fechaEntrega.toDateString()}`, 10, 30);
    doc.text(`Estado: ${this.estadoPedido}`, 10, 40);

    // Comentarios
    doc.text('Comentarios:', 10, 50);
    let y = 60;
    this.historialCalificaciones.forEach((comentario, index) => {
      doc.text(`${index + 1}. ${comentario.name} ${comentario.lastName}`, 10, y);
      doc.text(`   Calificación: ${comentario.rating}/5`, 10, y + 10);
      doc.text(`   Comentario: ${comentario.message}`, 10, y + 20);
      y += 30;
    });

    doc.save('historial_pedido.pdf');
  }
}

