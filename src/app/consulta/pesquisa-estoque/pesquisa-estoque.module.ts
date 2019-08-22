import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PesquisaEstoquePage } from './pesquisa-estoque.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaEstoquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PesquisaEstoquePage]
})
export class PesquisaEstoquePageModule {}
