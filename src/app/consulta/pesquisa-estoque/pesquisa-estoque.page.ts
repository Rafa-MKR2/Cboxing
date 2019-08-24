import { Component, OnInit } from '@angular/core';
import { LeitorDeCodigo } from 'src/app/services/LeitorCodigoDebarra';

@Component({
  selector: 'app-pesquisa-estoque',
  templateUrl: './pesquisa-estoque.page.html',
  styleUrls: ['./pesquisa-estoque.page.scss'],
})
export class PesquisaEstoquePage implements OnInit {
private codigoObjeto : string;
  constructor(private LeitorCodeBarra : LeitorDeCodigo) { }

  ngOnInit() {
  }

  lerCodigo(){
    return this.LeitorCodeBarra.lerCodigo().then(code=> this.codigoObjeto= code)
  }
}
