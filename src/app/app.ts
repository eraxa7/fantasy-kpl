import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { PlayerList } from './components/player-list/player-list';
import { TeamField } from './components/team-field/team-field';
import { BudgetPanel } from './components/budget-panel/budget-panel';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    PlayerList,
    TeamField,
    BudgetPanel
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fantasy-kpl-project');
}
