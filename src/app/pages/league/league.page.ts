import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { League } from '../../interfaces/interfaces';

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
})
export class LeaguePage implements OnInit {
  tittle: string;
  idLeague: string;
  leagueInfo: League;

  constructor(private activeRoute: ActivatedRoute,
              private data: DataService) { }

  ngOnInit() {
    console.log('HOLA');
    this.idLeague = this.activeRoute.snapshot.paramMap.get('idleague');
    this.getData();
  }

  getData(event?: any){
    this.data.getLeagueData(this.idLeague).subscribe( resp => {
      console.log(resp);

      event ? event.target.complete() : null;

      if(resp.length <= 0) {
        console.log('No encontrado');
      } else {
        this.leagueInfo = resp[0];
        console.log(this.leagueInfo);

      }
    })

  }

  doRefresh(event: any) {
    this.leagueInfo = null;
    this.getData(event)
  }

}
