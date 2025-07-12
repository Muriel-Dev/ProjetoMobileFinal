import { NgModule } from '@angular/core';
import { SplashPageRoutingModule } from './splash-routing.module';
import { SplashPage } from './splash.page';

@NgModule({
  imports: [
    SplashPageRoutingModule,
    SplashPage  // ← Componente vai para imports
  ],
  declarations: []  // ← Fica vazio para standalone components
})
export class SplashPageModule {}