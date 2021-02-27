import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LeagueCardComponent } from './league-card/league-card.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    HeaderComponent,
    LeagueCardComponent,
    ListComponent
  ],
  exports:  [
    MainHeaderComponent,
    HeaderComponent,
    LeagueCardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
