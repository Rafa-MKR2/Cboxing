import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PesquisaCaixaPage } from './pesquisa-caixa.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaCaixaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PesquisaCaixaPage]
})
export class PesquisaCaixaPageModule {}
