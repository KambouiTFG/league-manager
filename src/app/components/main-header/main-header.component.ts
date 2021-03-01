import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  constructor(private menuCtrl: MenuController,
    private route: Router) { }

  ngOnInit() {}

  openFirst() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

  goTo(page: string){
    this.menuCtrl.close();
    this.route.navigate([`/${page}`])

  }
}
