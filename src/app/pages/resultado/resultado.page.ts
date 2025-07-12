import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent
  ]
})
export class ResultadoPage {
  total = 0;
  frete = 0;
  final = 0;
  primeiroNome = '';

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { total: number; frete: number; final: number };

    if (state) {
      this.total = state.total;
      this.frete = state.frete;
      this.final = state.final;
    } else {
      this.total = this.carrinhoService.getTotal();
      this.frete = this.carrinhoService.frete;
      this.final = this.total + this.frete;
    }

    const currentEmail = localStorage.getItem('currentUserEmail');
    const allClientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    const cliente = allClientes.find((c: any) => c.email === currentEmail);

    if (cliente?.nome) {
      this.primeiroNome = cliente.nome.split(' ')[0];
    }
  }

  voltar() {
    this.router.navigate(['/tabs/products']);
  }
}
