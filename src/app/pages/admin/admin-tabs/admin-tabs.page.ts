import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-admin-tabs',
  templateUrl: './admin-tabs.page.html',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ],
})
export class AdminTabsPage {}
