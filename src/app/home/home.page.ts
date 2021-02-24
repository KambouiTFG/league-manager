import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { League } from '../interfaces/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  leagues: League[];

  constructor(private menu: MenuController,
              private data: DataService) {}
  


  ngOnInit() {
    this.getData();
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  getData(){
    console.log('pulsando...');
    this.data.getLeagues().subscribe( resp => {
      this.leagues = resp;
      console.log(resp);
    })
  }
}
