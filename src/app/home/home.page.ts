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

    public email: string;
    public senha: string;
  ErrorFirebase: any;

  constructor(
    private serviceWsm : WsmServiceService, 
    public toast : ToastController,
    public router : Router) {}

  logger(){

    this.serviceWsm.login(this.email,this.senha).then(e=>{
      this.router.navigate(['dashboard'])

    }).catch(e=> this.presentToast(this.error(e.code)))
  }

  
  error(erro: string): string{
    let feedback = ""
     switch(erro) {
         case "auth/user-disabled":
             feedback = "Usuário bloqueado, contate o administrador"
           break;

         case "auth/invalid-email":
             feedback = "Esse e-mail é inválido!"
           break;

         case "auth/wrong-password":
             feedback = "Senha incorreta!"
           break;
           case "auth/user-not-found":
             feedback = "Usuário nao encontrado!"
           break;

           case "auth/network-request-failed":
             feedback = "Falha na conexão com a internet!"
           break;
          case "auth/argument-error": 
           feedback = "preencha todos os campos!"
         break;
         default:
             feedback = erro;
       }


       return feedback;
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
