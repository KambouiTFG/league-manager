import { Component, Input, OnDestroy, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Team, Player, League } from '../../interfaces/interfaces';
import { UiServiceService } from '../../services/ui-service.service';
import { IonList } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  @ViewChild(IonList) ionList: IonList;

  @Output() refresh = new EventEmitter();
  subDeleteTeam: Subscription;
  subDeletePlayer: Subscription;
  subRefresh: Subscription;


  @Input() teams: Team[];
  @Input() leagueInfo: League;

  @Input() players: Player[];
  @Input() teamInfo: Team;

  toSearch: string = '';
  constructor(private route: Router,
              private uiCtrl: UiServiceService,
              private data: DataService) { }
  
  
  ngOnDestroy(): void {
    this.unsubscribe();
  }
  
  unsubscribe() {
    if (this.subDeleteTeam) {
      this.subDeleteTeam.unsubscribe();  
    }
    if (this.subDeletePlayer) {
      this.subDeletePlayer.unsubscribe();  
    }

    if (this.subRefresh) {
      this.subRefresh.unsubscribe();  
    }
  }

  ngOnInit() {
    this.subDeleteTeam = this.uiCtrl.deleteTeam.subscribe( r => {
      this.deleteTeam(r);
      //this.refresh.emit('');
    });

    this.subDeletePlayer = this.uiCtrl.deletePlayer.subscribe( r => {
      this.deletePlayer(r);
      //this.refresh.emit('');
    });

    this.subRefresh = this.uiCtrl.refresh.subscribe( r => {
      this.refresh.emit('');
    });


  }

  


  goToTeam(team: Team) {
    this.unsubscribe();

    this.route.navigate(['/team', team.id])
  }

  goToPlayer(player: Player) {
    //this.unsubscribe();
    this.route.navigate(['/player', player.id])
  }

  searchText(event: any) {
    this.toSearch = event.detail.value.trim();
  }

  newForm() {
    this.teams != null ? this.modalTeam() : this.modalPlayer();
  }

  modalPlayer() {
    console.log('new player');
    this.uiCtrl.presentModalPlayer(this.teamInfo);

  }


  modalTeam() {
    console.log('new team')
    this.uiCtrl.presentModalTeam(this.leagueInfo);
  }

  modalTeamEdit(team: Team) {
    console.log('edit team')
    this.ionList.closeSlidingItems();
    this.uiCtrl.presentModalTeam(this.leagueInfo, team);
  }

  modalPlayerEdit(player: Player) {
    console.log('edit team')
    this.ionList.closeSlidingItems();
    this.uiCtrl.presentModalPlayer(this.teamInfo, player);
  }

  presentAlertDeleteTeam(team: Team) {
    this.ionList.closeSlidingItems();
    this.uiCtrl.presentAlertDeleteTeam(team);
  }

  presentAlertDeletePlayer(player: Player) {
    this.ionList.closeSlidingItems();
    this.uiCtrl.presentAlertDeletePlayer(player);
  }

  deleteTeam(team: Team) {
    this.data.deleteTeam(team).subscribe( r => {
      this.uiCtrl.presentToast('Team deleted')
    });
  }

  deletePlayer(player: Player) {
    this.data.deletePlayer(player).subscribe( r => {
      this.uiCtrl.presentToast('Player deleted')
    });
  }
}
