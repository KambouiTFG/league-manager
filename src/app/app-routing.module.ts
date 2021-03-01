import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'leagues',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'leagues/:idleague',
    loadChildren: () => import('./pages/league/league.module').then( m => m.LeaguePageModule)
  },
  {
    path: 'team/:idteam',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'player/:idplayer',
    loadChildren: () => import('./pages/player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players/players.module').then( m => m.PlayersPageModule)
  },
  {
    path: '**',
    redirectTo: 'leagues',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
