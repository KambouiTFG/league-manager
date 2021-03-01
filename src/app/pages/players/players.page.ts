import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Player } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  name: string = '';
  teamName = false;
  players: Player[];
  notfound = false;

  constructor(private data: DataService,
              private route: Router) { }

  ngOnInit() {
  }

  search() {
    this.teamName ? this.searchByTeam() : this.searchByName();
  }


  searchByName() {
    this.data.searchPlayersByName(this.name).subscribe( r => {
      r ? this.players = r : this.players = null;
    })
  }

  searchByTeam() {
    this.data.searchPlayersByTeam(this.name).subscribe( r => {
      r[0] ? this.players = r[0].players : this.players = null;
    })
  }

  goToPlayer(player: Player) {
    this.route.navigate(['/player', player.id]);

  }



}
