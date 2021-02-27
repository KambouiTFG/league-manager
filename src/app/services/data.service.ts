import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Player, Team, League } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private exeQuery<T>(query: string) {
    query = URL + query;
    // console.log('buscando', query);
    return this.http.get<T>(query);
  }

  getAllLeagues() {
    return this.exeQuery<League[]>("leagues");
  }

  getLeagueData(idLeague: string){
    return this.exeQuery<League[]>(`leagues?Identificador=${idLeague}`);
  }

  getTeamData(idTeam: string){
    return this.exeQuery<Team[]>(`teams?id=${idTeam}`);
  }

  getTeams(idLeague: string){
    return this.exeQuery<Team[]>(`teams?Liga=${idLeague}`);
  }

  getPlayers(idTeam: string){
    return this.exeQuery<Player[]>(`players?teamId=${idTeam}`);
  }

  getPlayerInfo(idPlayer: string) {
    return this.exeQuery<Player[]>(`players?id=${idPlayer}`);
  }



  getAllTeams() {
    return this.exeQuery<Team[]>("teams");
  }

  getAllPlayers() {
    return this.exeQuery<Player[]>("players");
  }
}


