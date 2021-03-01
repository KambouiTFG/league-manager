import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { League, Team } from '../../interfaces/interfaces';

@Component({
  selector: 'app-modal-team',
  templateUrl: './modal-team.component.html',
  styleUrls: ['./modal-team.component.scss'],
})
export class ModalTeamComponent implements OnInit {
  @Input() leagueInfo: League;
  @Input() team: Team;

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
    console.log(this.leagueInfo);
    this.team ? this.editTeam() : console.log('to create new team');;
  }

  editTeam() {
    this.name = this.team['Nombre del equipo'];
    this.img = this.team['Logo del Equipo'];
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
    /* this.team ? 
    this.newteam() :  */
    this.validate() && this.validateLogo() ? this.newteam() : console.log('no valido');
    //this.modalCtrl.dismiss();
  }

  newteam() {
    const newTeam: Team = {
      'Nombre del equipo': this.name,
      id: this.team ? this.team.id : '',
      'Logo del Equipo': this.img,
      Liga: this.leagueInfo.Identificador
    }
    this.disabledButton = !this.disabledButton
    this.data.editTeam(newTeam).subscribe( resp => {
      this.team ? this.presentToast('Team updated') : this.presentToast('Team created') ;
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

/* {
  "Nombre del equipo": "Dazzlesphere",
  "id": "8154f4cb-246b-4bf9-bc64-51f8661b6781",
  "Logo del Equipo": "https://robohash.org/autemvoluptatemdolorem.png?size=250x250&set=set1",
  "Liga": "a249ed6a-ad8e-4692-9758-5d19454752f3"
} */
