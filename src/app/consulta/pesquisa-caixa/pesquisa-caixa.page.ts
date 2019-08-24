import { Component, OnInit } from '@angular/core';
import { LeitorDeCodigo } from 'src/app/services/LeitorCodigoDebarra';

@Component({
  selector: 'app-pesquisa-caixa',
  templateUrl: './pesquisa-caixa.page.html',
  styleUrls: ['./pesquisa-caixa.page.scss'],
})
export class PesquisaCaixaPage implements OnInit {
  private codigoCaixa : string

  constructor(private LeitorCodeBarra : LeitorDeCodigo) { }

  ngOnInit() {
  }
  lerCodigo(){
    return this.LeitorCodeBarra.lerCodigo().then(code=> this.codigoCaixa= code)
  }
}
