import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class RegisterPage implements OnInit {
  name = '';
  email = '';
  password = '';
  endereco = '';
  cep = '';
  cidade = '';
  bairro = '';
  estado = '';
  telefone = '';

  isEditMode = false;
  showPassword = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const editMode = this.route.snapshot.queryParamMap.get('edit');
    if (editMode === 'true') {
      this.isEditMode = true;
      this.loadClienteData();
    }
  }

  loadClienteData() {
    const currentEmail = localStorage.getItem('currentUserEmail');
    const allClientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    const cliente = allClientes.find((c: any) => c.email === currentEmail);
    if (cliente) {
      this.name = cliente.nome;
      this.email = cliente.email;
      this.password = cliente.password;
      this.endereco = cliente.endereco;
      this.cep = cliente.cep;
      this.cidade = cliente.cidade;
      this.bairro = cliente.bairro;
      this.estado = cliente.estado;
      this.telefone = cliente.telefone;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async register() {
    if (
      this.name && this.email && this.password &&
      this.endereco && this.cep && this.cidade &&
      this.bairro && this.estado && this.telefone
    ) {
      const cliente = {
        nome: this.name,
        email: this.email,
        password: this.password,
        endereco: this.endereco,
        cep: this.cep,
        cidade: this.cidade,
        bairro: this.bairro,
        estado: this.estado,
        telefone: this.telefone
      };

      let allClientes = JSON.parse(localStorage.getItem('clientes') || '[]');
      const index = allClientes.findIndex((c: any) => c.email === cliente.email);

      if (index >= 0) {
        allClientes[index] = cliente;
      } else {
        allClientes.push(cliente);
      }

      localStorage.setItem('clientes', JSON.stringify(allClientes));

      const alert = await this.alertController.create({
        header: 'Sucesso!',
        message: this.isEditMode
          ? 'Dados atualizados com sucesso!'
          : 'Cadastro realizado com sucesso!',
        buttons: ['OK']
      });
      await alert.present();
      await alert.onDidDismiss();

      if (this.isEditMode) {
        this.router.navigateByUrl('/tabs/profile');
      } else {
        this.router.navigateByUrl('/login');
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
