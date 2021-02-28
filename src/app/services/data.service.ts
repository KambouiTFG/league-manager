import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Player, Team, League } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

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

  generatUniqueID(){
    
    return this.chr4() + this.chr4() +
      '-' + this.chr4() +
      '-' + this.chr4() +
      '-' + this.chr4() +
      '-' + this.chr4() + this.chr4() + this.chr4();
  }

  private chr4(){
    return Math.random().toString(16).slice(-4);
  }


  editTeam(team: Team) {
    return team.id.length == 0 ? this.newTeam(team) : this.updateTeam(team);
  }

  private updateTeam(team: Team) {
    return this.http.put<Team>(`http://localhost:3000/teams/${team.id}`, team, this.httpOptions)
  }

  private newTeam(newTeam: Team) {
    newTeam.id = this.generatUniqueID();
    return this.http.post<Team>('http://localhost:3000/teams', newTeam, this.httpOptions)
  }

  editPlayer(newPlayer: Player) {
    return newPlayer.id.length == 0 ? this.newPlayer(newPlayer) : this.updatePlayer(newPlayer);
  }

  private updatePlayer(player: Player) {
    return this.http.put<Player>(`http://localhost:3000/players/${player.id}`, player, this.httpOptions)
  }

  private newPlayer(player: Player) {
    player.id = this.generatUniqueID();
    return this.http.post<Player>('http://localhost:3000/players', player, this.httpOptions)
  }

  deletePlayer(player: Player) {
    return this.http.delete<Player>(`http://localhost:3000/players/${player.id}`, this.httpOptions)
  }

  deleteTeam(team: Team) {
    return this.http.delete<Team>(`http://localhost:3000/teams/${team.id}`, this.httpOptions)
  }



}


