import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
     public barcodeScanner: BarcodeScanner,
     public router : Router,
     public toast : ToastController ) { }

  ngOnInit() {
  }




  consulta(){
    this.router.navigate(['colsulta'])

  }

 

}
