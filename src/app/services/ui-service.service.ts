import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private loadingCtrl: LoadingController) { }


  async presentLoading(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      cssClass: 'spinner-class'
    });
    await loading.present();
    return loading;
  }

  async dismisLoading(loading: any) {
    await loading.dismiss();
  }
}
