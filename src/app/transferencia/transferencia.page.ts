import { Component, OnInit } from '@angular/core';
import { LeitorDeCodigo } from '../services/LeitorCodigoDebarra';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.page.html',
  styleUrls: ['./transferencia.page.scss'],
})
export class TransferenciaPage implements OnInit {
  
  private codigoTranferencia : string

  constructor(private LeitorCodeBarra : LeitorDeCodigo) { }

  ngOnInit() {
  }


    lerCodigo(){
      return this.LeitorCodeBarra.lerCodigo().then(code=> this.codigoTranferencia= code)
    }
}
