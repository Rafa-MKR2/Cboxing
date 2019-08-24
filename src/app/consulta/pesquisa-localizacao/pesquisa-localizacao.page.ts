import { Component, OnInit } from '@angular/core';
import { LeitorDeCodigo } from 'src/app/services/LeitorCodigoDebarra';

@Component({
  selector: 'app-pesquisa-localizacao',
  templateUrl: './pesquisa-localizacao.page.html',
  styleUrls: ['./pesquisa-localizacao.page.scss'],
})
export class PesquisaLocalizacaoPage implements OnInit {
  private  codigoLocalizacao: string;

  constructor(private LeitorCodeBarra : LeitorDeCodigo) { }

  ngOnInit() {
  }

  lerCodigo(){
    return this.LeitorCodeBarra.lerCodigo().then(code=> this.codigoLocalizacao= code)
  }
}
