import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { League, Team } from '../../interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
})
export class LeaguePage implements OnInit {
  tittle: string;
  idLeague: string;
  leagueInfo: League;
  teams: Team[];
  searching = true;


  constructor(private activeRoute: ActivatedRoute,
              private data: DataService,
              private uiCtrl: UiServiceService) { }

  ngOnInit() {
    this.idLeague = this.activeRoute.snapshot.paramMap.get('idleague');
    this.getData();
  }

  async getData(event?: any){
    const loadingg = await this.uiCtrl.presentLoading('Loading data...');
    this.data.getLeagueData(this.idLeague).subscribe( async resp => {
      event ? event.target.complete() : null;
      if(resp.length <= 0) {
        this.leagueInfo = null;
        this.teams = null;
        console.log('No encontrado');
      } else {
        this.leagueInfo = resp[0];
        this.getTeams();
      }
      this.searching = false;
      await this.uiCtrl.dismisLoading(loadingg);
    })
  }

  getTeams() {
    this.data.getTeams(this.idLeague).subscribe( resp => {
      this.teams = resp;
    })
  }

  doRefresh(event: any) {
    this.searching = true;
    this.leagueInfo = null;
    this.teams = null;
    this.getData(event)
  }
}
