import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team, Player } from '../../interfaces/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() teams: Team[];
  @Input() players: Player[];
  constructor(private route: Router) { }

  ngOnInit() {}


  goToTeam(team: Team) {
    this.route.navigate(['/team', team.id])

  }

  goToPlayer(player: Player) {
    this.route.navigate(['/player', player.id])
  }
}
