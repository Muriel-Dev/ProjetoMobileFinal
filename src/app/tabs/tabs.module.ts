import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './tabs-routing.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
