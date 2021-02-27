import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { League } from '../../interfaces/interfaces';
import { LoadingController } from '@ionic/angular';
import { UiServiceService } from '../../services/ui-service.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  leagues: League[];
  loading;

  constructor(private menu: MenuController,
              private data: DataService,
              private uiCtrl: UiServiceService) {}
  


  ngOnInit() {
    this.getData();
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  doRefresh(event) {
    this.leagues = [];
    this.getData(event);
  }

  async getData(event?: any){
    const loadingg = await this.uiCtrl.presentLoading('Loading data...');
    this.data.getAllLeagues().subscribe( async resp => {
      this.leagues = resp;
      event ? event.target.complete() : null;
      await this.uiCtrl.dismisLoading(loadingg);
    })
  }

}
