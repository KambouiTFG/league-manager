import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Player, League, Team } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  idPlayer: string;
  infoPlayer: Player;
  teamData: Team;

  constructor(private activeRoute: ActivatedRoute,
              private data: DataService,
              private route: Router,
              private uiCtrl: UiServiceService) { }

  ngOnInit() {
    this.idPlayer = this.activeRoute.snapshot.paramMap.get('idplayer');
    this.getData();
  }

  getData(event?: any) {
    this.data.getPlayerInfo(this.idPlayer).subscribe( async resp => {
      const loadingg = await this.uiCtrl.presentLoading('Loading data...');
      event ? event.target.complete() : null;
      if(resp.length <= 0) {
        this.infoPlayer = null;
        this.teamData = null;
      } else {
        this.infoPlayer = resp[0];
        this.getTeamData(this.infoPlayer.teamId);
      }
      await this.uiCtrl.dismisLoading(loadingg);
    });
  }

  getTeamData(teamId: string) {
    this.data.getTeamData(teamId).subscribe(resp => {
      this.teamData = resp[0];
    });
  }

  goToTeam() {
    this.route.navigate(['/team', this.teamData.id])
  }

  doRefresh(event: any) {
    this.infoPlayer = null;
    this.teamData = null;
    event.target.complete();
    this.getData(event)
  }

}
