import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Team, Player } from '../../interfaces/interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  idTeam: string;
  teamInfo: Team;
  players: Player[];
  searching = true;


  constructor(private activeRoute: ActivatedRoute,
              private data: DataService,
              private uiCtrl: UiServiceService) { }

  ngOnInit() {
    this.idTeam = this.activeRoute.snapshot.paramMap.get('idteam');
    this.getData();
  }

  async getData(event?: any){
    const loadingg = await this.uiCtrl.presentLoading('Loading data...');

    this.data.getTeamData(this.idTeam).subscribe( async resp => {
      event ? event.target.complete() : null;
      if(resp.length <= 0) {
        this.teamInfo = null;
        this.players = null;
      } else {
        this.teamInfo = resp[0];
        this.getPlayers();
      }
      this.searching = false;
      await this.uiCtrl.dismisLoading(loadingg);

    })
  }

  getPlayers() {
    this.data.getPlayers(this.idTeam).subscribe( resp => {
      this.players = resp;
    })
  }

  doRefresh(event: any) {
    this.searching = true;
    this.teamInfo = null;
    this.players = null;
    this.getData(event)
  }
}
