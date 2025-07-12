import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Produto, ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-produtos-admin',
  templateUrl: './produtos-admin.page.html',
  styleUrls: ['./produtos-admin.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ProdutosAdminPage {
  produtos: Produto[] = [];
  novoProduto: Produto = {
    codigo: 0,
    descricao: '',
    valor: 0,
    desconto: 0,
    detalhes: ''
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) {
    this.loadProdutos();
  }

  loadProdutos() {
    this.produtos = this.produtosService.getProdutos();
  }

  adicionarProduto() {
    if (!this.novoProduto.descricao.trim()) {
      alert('Por favor, preencha a descrição do produto.');
      return;
    }

    const maiorCodigo = Math.max(...this.produtos.map(p => p.codigo), 0);
    const novoCodigo = maiorCodigo + 1;

    const produtoParaAdicionar: Produto = {
      ...this.novoProduto,
      codigo: novoCodigo
    };

    this.produtosService.adicionarProduto(produtoParaAdicionar);
    this.loadProdutos();

    this.novoProduto = {
      codigo: 0,
      descricao: '',
      valor: 0,
      desconto: 0,
      detalhes: ''
    };
  }

  removerProduto(index: number) {
    const codigo = this.produtos[index].codigo;
    this.produtosService.removerProduto(codigo);
    this.loadProdutos();
  }

  salvarEdicoes() {
    alert('Alterações salvas com sucesso!');
  }

  logout() {
    localStorage.removeItem('perfilAdm');
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUserEmail');
    this.router.navigateByUrl('/login');
  }
}
