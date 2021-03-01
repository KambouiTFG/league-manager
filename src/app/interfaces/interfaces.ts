
export interface Player {
    'Nombre del Jugador': string;
    id: string;
    Avatar: string;
    teamId: string;
  }
  
  export interface Team {
    'Nombre del equipo': string;
    id: string;
    'Logo del Equipo': string;
    Liga: string;
  }
  
  export interface League {
    'Nombre De La Liga': string;
    Identificador: string;
    'Logo de la Liga': string;
  }
  

export interface holeTeam {
  'Nombre del equipo': string;
  id: string;
  'Logo del Equipo': string;
  Liga: string;
  players: Player[];
}