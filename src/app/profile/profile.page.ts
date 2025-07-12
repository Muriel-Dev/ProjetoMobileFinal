import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ProfilePage implements OnDestroy {
  cliente: any = null;
  routerSubscription: Subscription;

  constructor(private router: Router) {
    this.loadCliente();

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url.includes('/profile')) {
        this.loadCliente();
      }
    });
  }

  loadCliente() {
    const isAdm = localStorage.getItem('perfilAdm') === 'true';

    if (isAdm) {
      this.cliente = {
        nome: 'Adm Aster Store',
        email: 'adm.aster.store@gmail.com',
        telefone: '62986070761',
        endereco: 'Avenida Tocantins, Q.CJ Lt. 35',
        bairro: 'Centro',
        cep: '76400000',
        cidade: 'Uruaçu',
        estado: 'Goiás'
      };
    } else {
      const currentEmail = localStorage.getItem('currentUserEmail');
      const allClientes = JSON.parse(localStorage.getItem('clientes') || '[]');
      this.cliente = allClientes.find((c: any) => c.email === currentEmail);
    }
  }

  logout() {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUserEmail');
    localStorage.removeItem('perfilAdm');
    this.router.navigateByUrl('/login');
  }

  editarDadosCliente() {
    const isAdm = localStorage.getItem('perfilAdm') === 'true';
    if (!isAdm) {
      this.router.navigateByUrl('/register?edit=true');
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
