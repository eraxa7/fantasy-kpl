import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-team-field',
  imports: [],
  templateUrl: './team-field.html',
  styleUrl: './team-field.css'
})
export class TeamField {

  constructor(public languageService: LanguageService) {}

}
