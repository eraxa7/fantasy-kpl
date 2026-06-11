import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { FantasyService } from '../../services/fantasy.service';

@Component({
  selector: 'app-team-field',
  imports: [],
  templateUrl: './team-field.html',
  styleUrl: './team-field.css'
})
export class TeamField {

  constructor(
    public languageService: LanguageService,
    public fantasyService: FantasyService
  ) {}

  getPlayer(position: string) {
  return this.fantasyService.selectedTeam.find(
    player => player.position === position
  );
}


getGoalkeepers() {
  return this.fantasyService.selectedTeam.filter(
    player => player.position === 'GK'
  );
}

getDefenders() {
  return this.fantasyService.selectedTeam.filter(
    player => player.position === 'DEF'
  );
}

getMidfielders() {
  return this.fantasyService.selectedTeam.filter(
    player => player.position === 'MID'
  );
}

getForwards() {
  return this.fantasyService.selectedTeam.filter(
    player => player.position === 'FWD'
  );
}

getLastName(fullName: string) {
  const parts = fullName.split(' ');
  return parts[parts.length - 1];
}

}