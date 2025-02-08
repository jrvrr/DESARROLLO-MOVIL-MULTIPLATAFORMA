import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, PermissionStatus } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  standalone: false,
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  profilePhoto: string = 'assets/icon/perfilvanguard.png';

  // Datos del formulario
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  telefono: string = '';
  correo: string = '';

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.nombre = user.name || '';
      this.apellidoPaterno = user.lastName || '';
      this.apellidoMaterno = user.middleName || '';
      this.telefono = user.phone || '';
      this.correo = user.email || '';
    } else {
      this.showAlert('Sin datos', 'No se encontró información de usuario. Por favor, regístrate.');
    }
  }

  async requestCameraPermission(): Promise<boolean> {
    if (!Capacitor.isNativePlatform()) {
      return true; // En la web, no se necesita solicitar permisos.
    }

    try {
      const permissions: PermissionStatus = await Camera.requestPermissions();
      if (permissions.camera !== 'granted') {
        this.showAlert('Permiso denegado', 'Debes permitir el acceso a la cámara.');
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error al solicitar permisos de cámara', error);
      return false;
    }
  }

  async requestGalleryPermission(): Promise<boolean> {
    if (!Capacitor.isNativePlatform()) {
      return true; // En la web, no se necesita solicitar permisos.
    }

    try {
      const permissions: PermissionStatus = await Camera.requestPermissions();
      if (permissions.photos !== 'granted') {
        this.showAlert('Permiso denegado', 'Debes permitir el acceso a la galería.');
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error al solicitar permisos de galería', error);
      return false;
    }
  }

  async changePhoto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cambiar Foto',
      buttons: [
        {
          text: 'Tomar Foto',
          icon: 'camera',
          handler: () => this.takePhoto(),
        },
        {
          text: 'Elegir de Galería',
          icon: 'image',
          handler: () => this.pickFromGallery(),
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async takePhoto() {
    if (!(await this.requestCameraPermission())) return;

    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      if (image.dataUrl) {
        this.profilePhoto = image.dataUrl;
      }
    } catch (error) {
      this.showAlert('Error', 'No se pudo tomar la foto.');
      console.error('Error al tomar la foto', error);
    }
  }

  async pickFromGallery() {
    if (Capacitor.isNativePlatform()) {
      if (!(await this.requestGalleryPermission())) return;

      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Photos,
        });

        if (image.dataUrl) {
          this.profilePhoto = image.dataUrl;
        }
      } catch (error) {
        this.showAlert('Error', 'No se pudo seleccionar la imagen.');
        console.error('Error al elegir de la galería', error);
      }
    } else {
      // Alternativa para la web
      this.uploadFromFile();
    }
  }

  uploadFromFile() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.profilePhoto = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  }

  async guardarCambios() {
    if (!this.validarFormulario()) {
      return;
    }

    // Actualizar los datos en localStorage
    const updatedUser = {
      name: this.nombre,
      lastName: this.apellidoPaterno,
      middleName: this.apellidoMaterno,
      phone: this.telefono,
      email: this.correo,
      photo: this.profilePhoto,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    this.showAlert('Éxito', 'Tu información ha sido guardada correctamente.');
  }

  validarFormulario(): boolean {
    if (!this.nombre || !this.apellidoPaterno || !this.apellidoMaterno || !this.telefono || !this.correo) {
      this.showAlert('Error', 'Todos los campos son obligatorios.');
      return false;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.correo)) {
      this.showAlert('Error', 'Ingresa un correo electrónico válido.');
      return false;
    }

    return true;
  }

  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
