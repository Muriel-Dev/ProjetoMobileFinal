import { Injectable } from '@angular/core';
import { Produto } from './produtos.service';

export interface ProdutoCarrinho extends Produto {
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private produtos: ProdutoCarrinho[] = [];
  frete = 21.54;
  private emailCliente: string | null = null;

  constructor() {
    const email = localStorage.getItem('currentUserEmail');
    if (email) {
      this.emailCliente = email;
      this.migrarCarrinhoAnonimoSePrecisar();
    }
    this.carregarCarrinho();
  }

  private getChaveCarrinho(): string {
    return this.emailCliente ? `carrinho_${this.emailCliente}` : 'carrinho_anonimo';
  }

  setEmailCliente(email: string) {
    this.emailCliente = email;
    this.migrarCarrinhoAnonimoSePrecisar();
    this.carregarCarrinho();
  }

  private migrarCarrinhoAnonimoSePrecisar() {
    const anonimo = localStorage.getItem('carrinho_anonimo');
    const chave = this.getChaveCarrinho();
    if (anonimo && !localStorage.getItem(chave)) {
      localStorage.setItem(chave, anonimo);
    }
  }

  adicionarProduto(produto: Produto, quantidade: number = 1) {
    const existente = this.produtos.find(p => p.codigo === produto.codigo);

    if (existente) {
      existente.quantidade += quantidade;
    } else {
      this.produtos.push({ ...produto, quantidade });
    }

    this.salvarCarrinho();
  }

  removerProduto(index: number) {
    this.produtos.splice(index, 1);
    this.salvarCarrinho();
  }

  getProdutos(): ProdutoCarrinho[] {
    return this.produtos;
  }

  getTotal(): number {
    return this.produtos.reduce((total, p) => total + p.desconto * p.quantidade, 0);
  }

  limparCarrinho() {
    this.produtos = [];
    this.salvarCarrinho();
  }

  private salvarCarrinho() {
    const chave = this.getChaveCarrinho();
    localStorage.setItem(chave, JSON.stringify(this.produtos));
  }

  private carregarCarrinho() {
    const chave = this.getChaveCarrinho();
    const salvo = localStorage.getItem(chave);
    this.produtos = salvo ? JSON.parse(salvo) : [];
  }
}
