import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaguePageRoutingModule } from './league-routing.module';

import { LeaguePage } from './league.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaguePageRoutingModule,
    ComponentsModule
  ],
  declarations: [LeaguePage]
})
export class LeaguePageModule {}
