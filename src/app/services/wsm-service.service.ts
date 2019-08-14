import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class WsmServiceService {

 
  constructor(private firebase : AngularFirestore, private auth : AngularFireAuth) {

   
   }
 

   login(email: string, senha: string){
    return this.auth.auth.signInWithEmailAndPassword(email,senha)

   }


}
