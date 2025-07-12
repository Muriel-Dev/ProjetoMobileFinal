import { Injectable } from '@angular/core';

export interface Cliente {
  nome: string;
  endereco: string;
  cep: string;
  cidade: string;
  bairro: string;
  estado: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente: Cliente | null = null;

  constructor() {}

  getCliente(): Cliente | null {
    return this.cliente;
  }

  salvarCliente(dados: Cliente): void {
    this.cliente = dados;
  }

  clienteExiste(): boolean {
    return this.cliente !== null;
  }
}
