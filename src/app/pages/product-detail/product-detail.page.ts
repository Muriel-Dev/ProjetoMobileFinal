import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService, Produto } from '../../services/produtos.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { AlertController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonContent,
  IonTitle,
  IonCardContent,
  IonCard,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton
  ]
})
export class ProductDetailPage implements OnInit {
  produto: Produto | undefined;
  quantidade: number = 1;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const codigo = +this.route.snapshot.paramMap.get('id')!;
    this.produto = this.produtosService.getProdutoPorCodigo(codigo);
  }

  incrementar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade = Math.max(1, this.quantidade - 1);
  }

  async comprar() {
    if (this.produto && this.quantidade > 0) {
      this.carrinhoService.adicionarProduto(this.produto, this.quantidade);

      const mensagem =
        this.quantidade === 1
          ? '1 unidade adicionada ao carrinho!'
          : `${this.quantidade} unidades adicionadas ao carrinho!`;

      const alert = await this.alertController.create({
        header: 'Produto adicionado',
        message: mensagem,
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
