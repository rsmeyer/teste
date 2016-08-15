import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  user: string = 'none';

  constructor(private alertController: AlertController) {
  }

  public doAlert(){
    let alert = this.alertController.create({
        title: 'New Friend!',
        message: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        inputs: [
          {
            name: 'nome',
            placeholder: 'Seu nome'
          }
        ],
        buttons:[
          {
            text: 'Cancelar'
          },
          {
            text: 'Ok',
            handler: (data) => {
              this.user = data.nome;
            }
          }
        ]
      });
      alert.present();
  }

}
