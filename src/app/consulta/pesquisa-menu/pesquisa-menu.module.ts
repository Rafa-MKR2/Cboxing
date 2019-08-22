import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PesquisaMenuPage } from './pesquisa-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PesquisaMenuPage]
})
export class PesquisaMenuPageModule {}
