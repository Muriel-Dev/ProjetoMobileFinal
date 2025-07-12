import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.page.html',
  styleUrls: ['./perfil-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PerfilAdminPage {
  admin = {
    nome: 'Adm Aster Store',
    email: 'adm.aster.store@gmail.com',
    telefone: '62986070761',
    endereco: 'Avenida Tocantins, Q.CJ Lt. 35',
    bairro: 'Centro',
    cep: '76400000',
    cidade: 'Uruaçu',
    estado: 'Goiás'
  };

  editando = false;

  constructor(private router: Router) {}

  editar() {
    this.editando = true;
  }

  salvar() {
    this.editando = false;
    alert('Dados salvos!');
  }

  logout() {
    localStorage.removeItem('perfilAdm');
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUserEmail');
    this.router.navigateByUrl('/login');
  }
}
