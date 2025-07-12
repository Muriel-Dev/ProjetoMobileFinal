import { Injectable } from '@angular/core';
import { ProdutoCarrinho } from './carrinho.service';

export interface Pedido {
  data: Date;
  produtos: ProdutoCarrinho[];
  total: number;
  frete: number;
  final: number;
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private emailCliente: string | null = null;

  constructor() {}

  setEmailCliente(email: string) {
    this.emailCliente = email;
  }

  adicionarPedido(pedido: Pedido) {
    if (!this.emailCliente) return;

    const chave = `pedidos_${this.emailCliente}`;
    const pedidosSalvos = localStorage.getItem(chave);
    const pedidos: Pedido[] = pedidosSalvos ? JSON.parse(pedidosSalvos) : [];

    pedidos.push(pedido);

    localStorage.setItem(chave, JSON.stringify(pedidos));
  }

  getPedidos(): Pedido[] {
    if (!this.emailCliente) return [];
    const chave = `pedidos_${this.emailCliente}`;
    const pedidosSalvos = localStorage.getItem(chave);
    return pedidosSalvos ? JSON.parse(pedidosSalvos) : [];
  }
}
