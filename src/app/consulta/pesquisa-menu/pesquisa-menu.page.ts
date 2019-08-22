import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa-menu',
  templateUrl: './pesquisa-menu.page.html',
  styleUrls: ['./pesquisa-menu.page.scss'],
})
export class PesquisaMenuPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }



  caixaPage(){
    return this.router.navigate(['pesquisa-caixa'])
  }

  objetoPage(){
    return this.router.navigate(['pesquisa-estoque'])
  }

  localizacaoPage(){
    this.router.navigate(['pesquisa-localizacao'])

  }

}
