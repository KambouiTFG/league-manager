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

  getLeagues() {
    return this.exeQuery<League[]>("leagues");
  }

  getTeams() {
    return this.exeQuery<Team[]>("teams");
  }

  getPlayers() {
    return this.exeQuery<Player[]>("players");
  }
}


