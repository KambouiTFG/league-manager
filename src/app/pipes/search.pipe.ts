import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../interfaces/interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], name: string, isTeam: boolean): any {
    if (name.length == 0) {
      return list;
    }
    return isTeam ?  this.searchTeam(list, name) :  this.searchPlayer(list, name);
    //return list.filter(item => list['Nombre del equipo'].toLowerCase().indexOf(name.toLowerCase()) !== -1);
    //return list.filter(item => list['Nombre del Jugador'].toLowerCase().indexOf(name.toLowerCase()) !== -1);


  }

  searchTeam(list :any[], name: string) {
    return list.filter(item => item['Nombre del equipo'].toLowerCase().indexOf(name.toLowerCase()) !== -1);

  }

  searchPlayer(list :any[], name: string) {
    return list.filter(item => item['Nombre del Jugador'].toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }
  
}
