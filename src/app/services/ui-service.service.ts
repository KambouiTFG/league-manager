import { EventEmitter, Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalPlayerComponent } from '../components/modal-player/modal-player.component';
import { ModalTeamComponent } from '../components/modal-team/modal-team.component';
import { League, Player, Team } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  deleteTeam  = new EventEmitter();
  deletePlayer  = new EventEmitter();
  refresh = new EventEmitter();


  constructor(private loadingCtrl: LoadingController,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) { }


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

  async presentModalTeam(leagueInfo: League, team?: Team) {
    const modal = await this.modalCtrl.create({
      component: ModalTeamComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        leagueInfo,
        team
      }
    });

    modal.onDidDismiss()
      .then((data) => {
        data.data ? this.refresh.emit('') : null;
    });
    return await modal.present();
  }

  async presentModalPlayer(teamInfo: Team, player?: Player) {
    const modal = await this.modalCtrl.create({
      component: ModalPlayerComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        teamInfo,
        player
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        data.data ? this.refresh.emit('') : null;
    });
    return await modal.present();
  }

  async presentAlertDeleteTeam(team: Team) {
    const message = `You sure want to delete this team?`;
    const alert = await this.alertCtrl.create({
      header: 'Delete team',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteTeam.emit(team);
            this.refresh.emit('')
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertDeletePlayer(player: Player) {
    const message = `You sure want to delete this player?`;
    const alert = await this.alertCtrl.create({
      header: 'Delete player',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Delete',
          handler: () => {
            this.deletePlayer.emit(player);
            this.refresh.emit('')
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  
}
