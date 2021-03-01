import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Player, Team } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-modal-player',
  templateUrl: './modal-player.component.html',
  styleUrls: ['./modal-player.component.scss'],
})
export class ModalPlayerComponent implements OnInit {
  @Input() teamInfo: Team;
  @Input() player: Player;

  name:string = '';
  logo:string = '';

  img: string = '';

  validName = true;
  validLogo = true;

  disabledButton = false;
  constructor(private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private data: DataService) { }

  ngOnInit() {
    console.log(this.teamInfo);
    this.player ? this.editPlayer() : console.log('to create new team');;

  }

  editPlayer() {
    this.name = this.player['Nombre del Jugador'];
    this.img = this.player.Avatar
  }

  close() {
    this.modalCtrl.dismiss();
  }

  validate(): boolean {
    if (this.name.trim().length == 0) {
      this.validName = false;
    } else {
      this.validName = true
    }

    return this.validName;
  }

  validateLogo() {
    if (this.img.trim().length == 0 ) {
      return false;
    } else {
      return true;
    }
  }

  save() {
    /* this.player ?
    this.newPlayer() : */
    this.validate() && this.validateLogo() ? this.newPlayer() : console.log('no valido');
    //this.modalCtrl.dismiss();
  }

  /* "Nombre del Jugador": "Auguste Penwarden",
  "id": "ca85cfed-69d8-4e03-9259-960195bde933",
  "Avatar": "https://robohash.org/etconsequunturreprehenderit.png?size=250x250&set=set1",
  "teamId": "8154f4cb-246b-4bf9-bc64-51f8661b6781" */

  newPlayer() {
    const player: Player = {
      'Nombre del Jugador': this.name,
      id: this.player ? this.player.id : '',
      Avatar: this.img,
      teamId: this.teamInfo.id
    }
    this.disabledButton = !this.disabledButton
    this.data.editPlayer(player).subscribe( resp => {
      this.player ? this.presentToast('Player updated') : this.presentToast('Player created');
      this.modalCtrl.dismiss('refresh');
      console.log(resp);
    })
  }

  generateLogo() {
    if (this.logo.length == 0) {
      this.validLogo = false;
    } else {
      this.validLogo = true;
      this.img = `https://robohash.org/${this.logo}.png?size=250x250&set=set1`
    }
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }


}
