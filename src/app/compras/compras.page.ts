import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  // Asegúrate de que phases sea un array de objetos desde el inicio
  phases = [
    { title: 'Fase 1', description: 'Descripción de la Fase 1', pdf: 'fase1.pdf' },
    { title: 'Fase 2', description: 'Descripción de la Fase 2', pdf: 'fase2.pdf' },
    { title: 'Fase 3', description: 'Descripción de la Fase 3', pdf: 'fase3.pdf' },
    { title: 'Fase 4', description: 'Descripción de la Fase 4', pdf: 'fase4.pdf' }
  ];

  ngOnInit(): void {
    // Si los datos vienen de un servicio, asegúrate de que la estructura es correcta
    // y asigna los datos a phases correctamente
    /*
    this.myService.getPhases().subscribe(data => {
      this.phases = data.map(phase => ({
        title: phase.title || 'Sin título',
        description: phase.description || 'Sin descripción',
        pdf: phase.pdf || ''
      }));
    });
    */
  }

  downloadPDF(pdfFile: string) {
    const link = document.createElement('a');
    link.href = `assets/pdf/${pdfFile}`;
    link.download = pdfFile;
    link.click();
  }
}
