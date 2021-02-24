import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController,
              private data: DataService) {}


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  getData(){
    console.log('pulsando...');
    this.data.getLeagues().subscribe( resp => {
      console.log(resp);
    })
  }
}
