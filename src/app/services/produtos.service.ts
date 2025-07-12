import { Injectable } from '@angular/core';

export interface Produto {
  codigo: number;
  descricao: string;
  valor: number;
  desconto: number;
  detalhes: string;
}

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private produtos: Produto[] = [
    { codigo: 1, descricao: 'Camisa Polo', valor: 80, desconto: 60, detalhes: 'Camisa confortável 100% algodão.' },
    { codigo: 2, descricao: 'Tênis Esportivo', valor: 200, desconto: 150, detalhes: 'Leve, resistente e estiloso.' },
    { codigo: 3, descricao: 'Calça Jeans', valor: 120, desconto: 90, detalhes: 'Jeans moderno e confortável.' },
    { codigo: 4, descricao: 'Jaqueta de Couro', valor: 350, desconto: 300, detalhes: 'Jaqueta estilosa para todas ocasiões.' },
    { codigo: 5, descricao: 'Boné Streetwear', valor: 50, desconto: 40, detalhes: 'Boné com design urbano.' },
    { codigo: 6, descricao: 'Relógio Esportivo', valor: 400, desconto: 320, detalhes: 'Resistente à água e com cronômetro.' },
    { codigo: 7, descricao: 'Óculos de Sol', valor: 150, desconto: 120, detalhes: 'Proteção UV com estilo.' },
    { codigo: 8, descricao: 'Mochila Casual', valor: 180, desconto: 140, detalhes: 'Espaçosa e resistente.' },
    { codigo: 9, descricao: 'Camiseta Básica', valor: 40, desconto: 30, detalhes: '100% algodão, cores variadas.' },
    { codigo: 10, descricao: 'Tênis Casual', valor: 170, desconto: 140, detalhes: 'Confortável e estiloso.' },
    { codigo: 11, descricao: 'Calça Chino', valor: 130, desconto: 100, detalhes: 'Leve e elegante.' },
    { codigo: 12, descricao: 'Camisa Social', valor: 110, desconto: 85, detalhes: 'Ideal para ocasiões formais.' },
    { codigo: 13, descricao: 'Cinto de Couro', valor: 70, desconto: 55, detalhes: 'Durável e clássico.' },
    { codigo: 14, descricao: 'Jaqueta Jeans', valor: 210, desconto: 170, detalhes: 'Estilo vintage.' },
    { codigo: 15, descricao: 'Moletom com Capuz', valor: 90, desconto: 70, detalhes: 'Quentinho e confortável.' },
    { codigo: 16, descricao: 'Chinelo Slide', valor: 35, desconto: 25, detalhes: 'Para momentos de lazer.' },
    { codigo: 17, descricao: 'Bermuda Jeans', valor: 80, desconto: 65, detalhes: 'Verão com estilo.' },
    { codigo: 18, descricao: 'Camisa Regata', valor: 30, desconto: 20, detalhes: 'Ideal para o calor.' },
    { codigo: 19, descricao: 'Tênis de Corrida', valor: 220, desconto: 180, detalhes: 'Alta performance.' },
    { codigo: 20, descricao: 'Calça Cargo', valor: 140, desconto: 110, detalhes: 'Múltiplos bolsos.' },
    { codigo: 21, descricao: 'Camisa Xadrez', valor: 100, desconto: 80, detalhes: 'Estilo clássico.' },
    { codigo: 22, descricao: 'Jaqueta Impermeável', valor: 300, desconto: 260, detalhes: 'Proteção contra chuva.' },
    { codigo: 23, descricao: 'Tênis Skate', valor: 160, desconto: 130, detalhes: 'Durável e confortável.' },
    { codigo: 24, descricao: 'Gorro de Lã', valor: 45, desconto: 35, detalhes: 'Ideal para dias frios.' },
    { codigo: 25, descricao: 'Camisa Polo Manga Longa', valor: 90, desconto: 70, detalhes: 'Estilo esportivo.' },
    { codigo: 26, descricao: 'Relógio Casual', valor: 350, desconto: 300, detalhes: 'Design moderno.' },
    { codigo: 27, descricao: 'Saia Quadrilha', valor: 250, desconto: 210, detalhes: 'Perfeita para suas festas juninas.' },
    { codigo: 28, descricao: 'Jaqueta Esportiva', valor: 280, desconto: 240, detalhes: 'Conforto e estilo.' },
    { codigo: 29, descricao: 'Calça de Moletom', valor: 100, desconto: 80, detalhes: 'Perfeita para o dia a dia.' },
    { codigo: 30, descricao: 'Short Feminino', valor: 110, desconto: 85, detalhes: 'Acabamento de alta qualidade.' }
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  removerProduto(codigo: number) {
    this.produtos = this.produtos.filter(p => p.codigo !== codigo);
  }

  getProdutoPorCodigo(codigo: number): Produto | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}
