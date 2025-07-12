import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { ProdutosService, Produto } from '../services/produtos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    IonTitle,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonSearchbar,
    FormsModule,
  ],
})
export class ProductsPage implements OnInit {
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];

  buscaTexto: string = '';
  precoMin: number | null = null;
  precoMax: number | null = null;
  mostrarFiltros: boolean = false;

  constructor(private produtosService: ProdutosService, private router: Router) {}

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
    this.produtosFiltrados = [...this.produtos];
  }

  verProduto(codigo: number) {
    this.router.navigate(['/product-detail', codigo]);
  }

  filtrarProdutos() {
    const normalizar = (texto: string) =>
      texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const palavrasBusca = normalizar(this.buscaTexto).trim().split(/\s+/);

    this.produtosFiltrados = this.produtos.filter(produto => {
      const descricaoNormalizada = normalizar(produto.descricao);
      const precoDesconto = produto.desconto;

      const nomeOk = palavrasBusca.every(palavra =>
        descricaoNormalizada.includes(palavra)
      );
      const precoMinOk = this.precoMin == null || precoDesconto >= this.precoMin;
      const precoMaxOk = this.precoMax == null || precoDesconto <= this.precoMax;

      return nomeOk && precoMinOk && precoMaxOk;
    });
  }
}
