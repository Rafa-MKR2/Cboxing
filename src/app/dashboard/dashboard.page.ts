import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { WsmServiceService } from '../services/wsm-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
     public barcodeScanner: BarcodeScanner,
     public router : Router,
     private service : WsmServiceService,
     public toast : ToastController ) { 
    }

  ngOnInit() {
  }




  consulta(){
   return this.router.navigate(['pesquisa-menu'])

  }

  
  recebimentoPage(){
    return  this.router.navigate(['recebimento'])

  }

  enderecamentoPage(){
    return  this.router.navigate(['enderecamento'])

  }

  configuracaoPage(){
    return  this.router.navigate(['configuracao'])
  }

  conferenciaPage(){
    return  this.router.navigate(['conferir'])

  }

  tranferenciaPage(){
    return  this.router.navigate(['transferencia'])

  }


  atendimentoPage(){
    return  this.router.navigate(['atendimento'])

  }

  separacaoPage(){
    return  this.router.navigate(['separacao'])

  }


  inventarioPage(){
    return  this.router.navigate(['inventario'])

  }


  sair(){
    this.service.exitLogin().then(()=>{
      this.router.navigate(['home'], {replaceUrl: true})

    })
  }

}
