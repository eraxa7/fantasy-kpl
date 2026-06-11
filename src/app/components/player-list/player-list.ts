import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { FantasyService } from '../../services/fantasy.service';

@Component({
  selector: 'app-player-list',
  imports: [FormsModule],
  templateUrl: './player-list.html',
  styleUrl: './player-list.css'
})
export class PlayerList {

  constructor(
  public languageService: LanguageService,
  public fantasyService: FantasyService
) {}

searchText = '';

selectedPosition = 'ALL';

get filteredPlayers() {

  return this.players.filter(player => {

    const matchSearch =

      player.nameRu.toLowerCase().includes(this.searchText.toLowerCase()) ||

      player.nameEn.toLowerCase().includes(this.searchText.toLowerCase()) ||

      player.nameKz.toLowerCase().includes(this.searchText.toLowerCase());

    const matchPosition =

      this.selectedPosition === 'ALL' ||

      player.position === this.selectedPosition;

    return matchSearch && matchPosition;

  });

}

  selectPlayer(player: any) {

  if (player.selected) {
    return;
  }

  const positionCount = this.fantasyService.selectedTeam.filter(
  p => p.position === player.position
).length;

if (player.position === 'GK' && positionCount >= 1) {
  alert('Можно выбрать только 1 вратаря');
  return;
}

if (player.position === 'DEF' && positionCount >= 4) {
  alert('Можно выбрать максимум 4 защитника');
  return;
}

if (player.position === 'MID' && positionCount >= 4) {
  alert('Можно выбрать максимум 4 полузащитника');
  return;
}

if (player.position === 'FWD' && positionCount >= 2) {
  alert('Можно выбрать максимум 2 нападающих');
  return;
}

  if (this.fantasyService.selectedPlayers >= 15) {
    alert('Можно выбрать максимум 15 игроков');
    return;
  }

  player.selected = true;

this.fantasyService.selectedPlayers++;

  this.fantasyService.budget -= player.price;

  this.fantasyService.selectedTeam.push(player);
}

removePlayer(player: any) {

  player.selected = false;

  this.fantasyService.selectedPlayers--;

  this.fantasyService.budget += player.price;

  this.fantasyService.selectedTeam = this.fantasyService.selectedTeam.filter(
    p => p.nameEn !== player.nameEn
  );
}

  players = [

    {
      nameKz: 'Ислам Чесноков',
      nameRu: 'Ислам Чесноков',
      nameEn: 'Islam Chesnokov',

      clubKz: 'Тобыл',
      clubRu: 'Тобол',
      clubEn: 'Tobol',

      position: 'MID',
      price: 8.5,
      selected: false
    },

    {
      nameKz: 'Макс Эбонг',
      nameRu: 'Макс Эбонг',
      nameEn: 'Max Ebong',

      clubKz: 'Астана',
      clubRu: 'Астана',
      clubEn: 'Astana',

      position: 'MID',
      price: 7.5,
      selected: false
    },

    {
      nameKz: 'Абат Аймбетов',
      nameRu: 'Абат Аймбетов',
      nameEn: 'Abat Aymbetov',

      clubKz: 'Адана Демирспор',
      clubRu: 'Адана Демирспор',
      clubEn: 'Adana Demirspor',

      position: 'FWD',
      price: 9.0,
      selected: false
    },

{
  nameKz: 'Рамазан Каримов',
  nameRu: 'Рамазан Каримов',
  nameEn: 'Ramazan Karimov',

  clubKz: 'Ақтөбе',
  clubRu: 'Актобе',
  clubEn: 'Aktobe',

  position: 'DEF',
  price: 6.5,
  selected: false
},

{
  nameKz: 'Стас Покатилов',
  nameRu: 'Стас Покатилов',
  nameEn: 'Stas Pokatilov',

  clubKz: 'Тобыл',
  clubRu: 'Тобол',
  clubEn: 'Tobol',

  position: 'GK',
  price: 6.0,
  selected: false
    },

    {
      nameKz: 'Нұралы Әліп',
      nameRu: 'Нуралы Алип',
      nameEn: 'Nuraly Alip',

      clubKz: 'Зенит',
      clubRu: 'Зенит',
      clubEn: 'Zenit',

      position: 'DEF',
      price: 7.0,
      selected: false
    },

    {
  nameKz: 'Бақтиёр Зайнутдинов',
  nameRu: 'Бактиёр Зайнутдинов',
  nameEn: 'Bakhtiyor Zaynutdinov',

  clubKz: 'Бешикташ',
  clubRu: 'Бешикташ',
  clubEn: 'Besiktas',

  position: 'MID',
  price: 8.0,
  selected: false
},

{
  nameKz: 'Айбар Жақсылықов',
  nameRu: 'Айбар Жаксылыков',
  nameEn: 'Aibar Zhaksylykov',

  clubKz: 'Қайсар',
  clubRu: 'Кайсар',
  clubEn: 'Kaisar',

  position: 'FWD',
  price: 7.5,
  selected: false
},
  ];

}
