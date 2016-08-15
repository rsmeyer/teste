import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the InputTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/input-test/input-test.html',
})
export class InputTestPage {

  login: string;
  senha: string;

  constructor(private alertController: AlertController) {}

  entrar(){
    let alert = this.alertController.create({
          title: 'Entrando...',
          subTitle: 'Login: '+this.login+' Senha: '+this.senha,
          buttons: ['OK']
        });
        alert.present();
  }

}
