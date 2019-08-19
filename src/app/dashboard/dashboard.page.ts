import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public barcodeScanner: BarcodeScanner, public toast : ToastController ) { }

  ngOnInit() {
  }

  async presentToast(mensager : string) {
    const toast = await this.toast.create({
      message: mensager,
      duration: 5000,
      position : 'top'
    });
    toast.present();

  }



  lerCodigo(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.presentToast('codigo : '+barcodeData)
      console.log(barcodeData)
     }).catch(err => {
      this.presentToast('error : '+err)
     });
  }

}
