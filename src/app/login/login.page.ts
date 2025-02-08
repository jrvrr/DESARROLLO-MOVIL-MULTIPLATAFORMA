import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@(gmail\\.com|email\\.com)$') 
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$') 
      ]],
      rememberMe: [false]
    });
    
  }

  ngOnInit() {
    const savedLogin = localStorage.getItem('userLogin');
    if (savedLogin) {
      const loginData = JSON.parse(savedLogin);
      this.loginForm.patchValue({
        email: loginData.email,
        password: '',
        rememberMe: false
      });
    }
  }

  async login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const rememberMe = this.loginForm.value.rememberMe;
  
    const savedLogin = localStorage.getItem('userLogin');
    if (savedLogin) {
      const loginData = JSON.parse(savedLogin);
  
      if (email === loginData.email && password === loginData.password) {
        if (rememberMe) {
          localStorage.setItem('rememberedUser', email);
        } else {
          localStorage.removeItem('rememberedUser');
        }
  
        await this.showAlert('Inicio de sesión exitoso', 'Bienvenido de nuevo.');
        console.log('Usuario autenticado');
  
      } else {
        await this.showAlert('Error', 'Correo o contraseña incorrectos.');
      }
    } else {
      await this.showAlert('Error', 'No hay datos de usuario guardados.');
    }
  }
  

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
