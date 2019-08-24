import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';



export class LeitorDeCodigo  {

  private codigo : string; 

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toast : ToastController) { }


  async presentToast(mensager : string) {
    const toast = await this.toast.create({
      message: mensager,
      duration: 5000,
      position : 'top'
    });
    toast.present();

  }

  lerCodigo(){
   return this.barcodeScanner.scan().then(barcodeData => {
      this.presentToast('código : '+barcodeData.text)
                this.codigo = barcodeData.text;
                return this.codigo;
     })
  }

}
