import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-player-list',
  imports: [],
  templateUrl: './player-list.html',
  styleUrl: './player-list.css'
})
export class PlayerList {

  constructor(public languageService: LanguageService) {}

  players = [
    {
      nameKz: 'Ислам Чесноков',
      nameRu: 'Ислам Чесноков',
      nameEn: 'Islam Chesnokov',

      clubKz: 'Тобыл',
      clubRu: 'Тобол',
      clubEn: 'Tobol',

      position: 'MID',
      price: 8.5
    },

    {
      nameKz: 'Макс Эбонг',
      nameRu: 'Макс Эбонг',
      nameEn: 'Max Ebong',

      clubKz: 'Астана',
      clubRu: 'Астана',
      clubEn: 'Astana',

      position: 'MID',
      price: 7.5
    },

    {
      nameKz: 'Абат Аймбетов',
      nameRu: 'Абат Аймбетов',
      nameEn: 'Abat Aymbetov',

      clubKz: 'Адана Демирспор',
      clubRu: 'Адана Демирспор',
      clubEn: 'Adana Demirspor',

      position: 'FWD',
      price: 9.0
    },

    {
      nameKz: 'Рамазан Каримов',
      nameRu: 'Рамазан Каримов',
      nameEn: 'Ramazan Karimov',

      clubKz: 'Ақтөбе',
      clubRu: 'Актобе',
      clubEn: 'Aktobe',

      position: 'DEF',
      price: 6.5
    }
  ];

}
