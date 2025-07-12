import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface Pedido {
  data: string;
  produtos: {
    codigo: number;
    descricao: string;
    quantidade: number;
    valor: number;
    desconto: number;
  }[];
  total: number;
  frete: number;
  final: number;
  clienteEmail: string;
  showDetails?: boolean;
}

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.page.html',
  styleUrls: ['./pedidos-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class PedidosAdminPage {
  pedidos: Pedido[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    this.loadPedidos();
  }

  loadPedidos() {
    this.pedidos = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('pedidos_')) {
        const pedidosCliente = JSON.parse(localStorage.getItem(key) || '[]');
        if (Array.isArray(pedidosCliente)) {
          this.pedidos = this.pedidos.concat(
            pedidosCliente.map((p: any) => ({
              ...p,
              clienteEmail: key.replace('pedidos_', ''),
              showDetails: false,
            }))
          );
        }
      }
    }

    this.pedidos.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
  }

  toggleDetails(pedido: Pedido) {
    pedido.showDetails = !pedido.showDetails;
  }

  logout() {
    localStorage.removeItem('perfilAdm');
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUserEmail');
    this.router.navigateByUrl('/login');
  }
}
