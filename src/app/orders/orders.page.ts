import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { PedidosService, Pedido } from '../services/pedidos.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class OrdersPage implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService, private router: Router) {}

  ngOnInit() {
    const currentEmail = localStorage.getItem('currentUserEmail');
    if (currentEmail) {
      this.pedidosService.setEmailCliente(currentEmail);
      this.pedidos = this.pedidosService.getPedidos();
    }
  }

  ionViewWillEnter() {
    const currentEmail = localStorage.getItem('currentUserEmail');
    if (currentEmail) {
      this.pedidosService.setEmailCliente(currentEmail);
      this.pedidos = this.pedidosService.getPedidos();
    }
  }

  logout() {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUserEmail');
    this.router.navigateByUrl('/login');
  }
}
