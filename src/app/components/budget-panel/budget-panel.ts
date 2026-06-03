import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-budget-panel',
  imports: [],
  templateUrl: './budget-panel.html',
  styleUrl: './budget-panel.css'
})
export class BudgetPanel {

  constructor(public languageService: LanguageService) {}

}
