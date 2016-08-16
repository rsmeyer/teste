import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalLoginPage } from './../modal-login/modal-login';

/*
  Generated class for the ModalTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-test/modal-test.html',
})
export class ModalTestPage {

  constructor(public navCtrl: NavController,public modalController : ModalController) {  }

  openModal(){
    let modal = this.modalController.create(ModalLoginPage);

    modal.onDidDismiss(
      (param) => {
        console.log('Dados do Usuário ',param)
      }
    );

    modal.present();
  }

}
