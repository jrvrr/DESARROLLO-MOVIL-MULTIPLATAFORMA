import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-procerotu',
  templateUrl: './procerotu.page.html',
  styleUrls: ['./procerotu.page.scss'],
})
export class ProcerotuPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };
  lista = [
    { imagen: 'assets/img/minecraft.png', nombre: 'Minecraft', achievementProgress: 95 },
    { imagen: 'assets/img/csgo.jpg', nombre: 'CS:GO', achievementProgress: 60 },
    { imagen: 'assets/img/valorant.png', nombre: 'Valorant', achievementProgress: 30 },
    { imagen: 'assets/img/fornite.jpg', nombre: 'Fortnite', achievementProgress: 50 },
    { imagen: 'assets/img/gtav.jpg', nombre: 'GTA V', achievementProgress: 90 },
    { imagen: 'assets/img/eldenring.jpg', nombre: 'Elden Ring', achievementProgress: 65 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
