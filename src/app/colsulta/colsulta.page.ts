import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { IonSearchbar} from '@ionic/angular';


@Component({
  selector: 'app-colsulta',
  templateUrl: './colsulta.page.html',
  styleUrls: ['./colsulta.page.scss'],
})
export class ColsultaPage implements OnInit {
  @ViewChild('buscaCodigo',{static: false}) myInput: IonSearchbar

  public codigo : string; 

  constructor(
    public barcodeScanner: BarcodeScanner,
    public toast : ToastController) { }

  ngOnInit() {
    
  }


  ionViewDidEnter() {
    this.myInput.setFocus()
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
      this.presentToast('código : '+barcodeData.text)
      this.codigo = barcodeData.text;
     }).catch(err => {
      this.presentToast('Erro : '+err)
     });
  }

}
