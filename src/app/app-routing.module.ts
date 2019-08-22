import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'buscar', loadChildren: './buscar/buscar.module#BuscarPageModule' },
  { path: 'conferir', loadChildren: './conferencia/conferir/conferir.module#ConferirPageModule' },
  { path: 'colsulta', loadChildren: './colsulta/colsulta.module#ColsultaPageModule' },
  { path: 'pesquisa-caixa', loadChildren: './consulta/pesquisa-caixa/pesquisa-caixa.module#PesquisaCaixaPageModule' },
  { path: 'pesquisa-estoque', loadChildren: './consulta/pesquisa-estoque/pesquisa-estoque.module#PesquisaEstoquePageModule' },
  { path: 'pesquisa-localizacao', loadChildren: './consulta/pesquisa-localizacao/pesquisa-localizacao.module#PesquisaLocalizacaoPageModule' },
  { path: 'pesquisa-menu', loadChildren: './consulta/pesquisa-menu/pesquisa-menu.module#PesquisaMenuPageModule' },
  { path: 'transferencia', loadChildren: './transferencia/transferencia.module#TransferenciaPageModule' },
  { path: 'recebimento', loadChildren: './recebimento/recebimento.module#RecebimentoPageModule' },
  { path: 'itens', loadChildren: './conferencia/itens/itens.module#ItensPageModule' },
  { path: 'enderecamento', loadChildren: './enderecamento/enderecamento.module#EnderecamentoPageModule' },
  { path: 'atendimento', loadChildren: './atendimento/atendimento.module#AtendimentoPageModule' },
  { path: 'configuracao', loadChildren: './configuracao/configuracao.module#ConfiguracaoPageModule' },
  { path: 'separacao', loadChildren: './separacao/separacao.module#SeparacaoPageModule' },
  { path: 'inventario', loadChildren: './inventario/inventario.module#InventarioPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
