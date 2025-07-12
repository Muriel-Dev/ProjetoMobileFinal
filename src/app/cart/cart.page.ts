import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ProdutoCarrinho } from 'src/app/services/carrinho.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonCardContent,
  IonCard,
  AlertController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
  ]
})
export class CartPage {
  produtos: ProdutoCarrinho[] = [];
  total = 0;
  frete = 0;
  final = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private pedidosService: PedidosService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.atualizarCarrinho();
  }

  atualizarCarrinho() {
    this.produtos = this.carrinhoService.getProdutos();
    this.total = this.carrinhoService.getTotal();
    this.frete = this.carrinhoService.frete;
    this.final = this.total + this.frete;
    this.cd.detectChanges();
  }

  removerProduto(index: number) {
    this.carrinhoService.removerProduto(index);
    this.atualizarCarrinho();
  }

  async finalizarCompra() {
    if (this.produtos.length === 0) {
      const alert = await this.alertController.create({
        header: 'Carrinho vazio',
        message: 'Adicione produtos ao carrinho antes de finalizar a compra.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    const currentEmail = localStorage.getItem('currentUserEmail');
    if (currentEmail) {
      this.pedidosService.setEmailCliente(currentEmail);
    }

    this.pedidosService.adicionarPedido({
      data: new Date(),
      produtos: [...this.produtos],
      total: this.total,
      frete: this.frete,
      final: this.final
    });

    this.router.navigate(['/resultado'], {
      state: {
        total: this.total,
        frete: this.frete,
        final: this.final
      }
    });

    this.carrinhoService.limparCarrinho();
  }
}
