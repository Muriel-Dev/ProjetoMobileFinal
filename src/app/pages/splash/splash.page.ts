import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 ADICIONE ISSO!

import { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonGrid,
    IonRow,
    IonCol
  ]
})
export class SplashPage implements OnInit {
  showButtons = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      const user = localStorage.getItem('user');

      if (user) {
        // Usuário já logado → vai direto pro app
        this.router.navigateByUrl('/tabs/products');
      } else {
        // Não logado → mostra botões
        this.showButtons = true;
      }
    }, 2000);
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
