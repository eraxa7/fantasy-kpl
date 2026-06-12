import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FantasyService {

  selectedPlayers = 0;

  budget = 100;

  selectedTeam: any[] = [];

  captain: any = null;

  getTotalPoints() {
  return this.selectedTeam.reduce((sum, player) => {

    if (this.captain?.nameEn === player.nameEn) {
      return sum + player.points * 2;
    }

    return sum + player.points;

  }, 0);
}

transfersLeft = 3;

}
