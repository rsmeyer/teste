import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ToastTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/toast-test/toast-test.html',
})
export class ToastTestPage {

  constructor(private navCtrl: NavController, private toastController : ToastController) {
  }

  showToast(){
    let toast = this.toastController.create(
      {
        message: 'User was added successfully',
        duration: 3000,
        showCloseButton: true
      }
    );
    toast.present();

    toast.onDidDismiss(() => {
      console.log('adasdasd')
    });

  }
}
