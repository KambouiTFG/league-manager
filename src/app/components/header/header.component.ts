import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() img: string;

  icons = ['../../../assets/icon/league.png']

  constructor() { }

  ngOnInit() {}

  getIcon(){
    switch (this.title) {
      case 'My Leagues':
      return this.icons[0];
    
      case 'teams':
      return this.icons[1];
      default:
        return this.img;
    }

  }

}
