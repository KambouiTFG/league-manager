import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from '../../interfaces/interfaces';

@Component({
  selector: 'app-league-card',
  templateUrl: './league-card.component.html',
  styleUrls: ['./league-card.component.scss'],
})
export class LeagueCardComponent implements OnInit {
  @Input() league: League;

  constructor(private route: Router) { }

  ngOnInit() {

  }

  goToLeague(){
    this.route.navigate(['/leagues', this.league.Identificador])
  }

}
