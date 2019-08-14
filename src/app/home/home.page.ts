import { Component } from '@angular/core';
import { WsmServiceService } from '../services/wsm-service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    private email: string;
    private senha: string;

  constructor(
    private serviceWsm : WsmServiceService, 
    public toast : ToastController,
    public router : Router) {}

  logger(){

    this.serviceWsm.login(this.email,this.senha).then(e=>{
      this.router.navigate(['dashboard'])
      console.log(e)

    }).catch(e=> this.presentToast(e.code))
  }


  async presentToast(mensager : string) {
    const toast = await this.toast.create({
      message: mensager,
      duration: 5000,
      position : 'top'
    });
    toast.present();

  }


}
