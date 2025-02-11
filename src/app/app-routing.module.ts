import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cotizaciones/:menu',
    loadChildren: () => import('./cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'fase1',
    loadChildren: () => import('./fase1/fase1.module').then( m => m.Fase1PageModule)
  },
  {
    path: 'fase2',
    loadChildren: () => import('./fase2/fase2.module').then( m => m.Fase2PageModule)
  },
  {
    path: 'fase3',
    loadChildren: () => import('./fase3/fase3.module').then( m => m.Fase3PageModule)
  },
  {
    path: 'fase4',
    loadChildren: () => import('./fase4/fase4.module').then( m => m.Fase4PageModule)
  },
  {
    path: 'pedidios',
    loadChildren: () => import('./pedidios/pedidios.module').then( m => m.PedidiosPageModule)
  },
  {
    path: 'cotizaciones',
    loadChildren: () => import('./cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
