import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LeagueCardComponent } from './league-card/league-card.component';
import { MainHeaderComponent } from './main-header/main-header.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    HeaderComponent,
    LeagueCardComponent
  ],
  exports:  [
    MainHeaderComponent,
    HeaderComponent,
    LeagueCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
