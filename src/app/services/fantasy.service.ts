import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FantasyService {

  selectedPlayers = 0;

  budget = 100;

  selectedTeam: any[] = [];

}