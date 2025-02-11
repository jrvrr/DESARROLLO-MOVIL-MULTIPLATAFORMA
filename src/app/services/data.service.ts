import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private mensajeSource = new BehaviorSubject<string>(''); // Estado inicial vacío
  mensajeActual = this.mensajeSource.asObservable();

  cambiarMensaje(mensaje: string) {
    this.mensajeSource.next(mensaje); // Envía el nuevo valor
  }
}
