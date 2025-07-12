import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  showPassword = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private carrinhoService: CarrinhoService,
    private pedidosService: PedidosService
  ) {}

  ngOnInit() {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async login() {
    if (this.email === 'adm.aster.store@gmail.com' && this.password === 'adm102030') {
      localStorage.setItem('perfilAdm', 'true');
      localStorage.setItem('currentUserEmail', this.email);
      this.router.navigateByUrl('/admin');
      return;
    }

    const allClientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    const user = allClientes.find(
      (c: any) => c.email === this.email && c.password === this.password
    );

    if (user) {
      localStorage.setItem('currentUserEmail', this.email);
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('perfilAdm', 'false');

      this.carrinhoService.setEmailCliente(this.email);
      this.pedidosService.setEmailCliente(this.email);

      this.router.navigateByUrl('/tabs/products');
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Email ou senha inválidos. Tente novamente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
