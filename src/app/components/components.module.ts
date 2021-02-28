import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LeagueCardComponent } from './league-card/league-card.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ListComponent } from './list/list.component';
import { PipesModule } from '../pipes/pipes.module';
import { ModalPlayerComponent } from './modal-player/modal-player.component';
import { ModalTeamComponent } from './modal-team/modal-team.component';
import { FormsModule, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    MainHeaderComponent,
    HeaderComponent,
    LeagueCardComponent,
    ListComponent,
    ModalPlayerComponent,
    ModalTeamComponent,
  ],
  exports:  [
    MainHeaderComponent,
    HeaderComponent,
    LeagueCardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule 
  ]
})
export class ComponentsModule { }
