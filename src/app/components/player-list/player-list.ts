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

  if (this.fantasyService.transfersLeft <= 0) {
  alert('Трансферы закончились');
  return;
}



this.fantasyService.transfersLeft--;

  player.selected = false;

  this.fantasyService.selectedPlayers--;

  this.fantasyService.budget += player.price;

  this.fantasyService.selectedTeam = this.fantasyService.selectedTeam.filter(
    p => p.nameEn !== player.nameEn
  );


}

setCaptain(player: any) {
  this.fantasyService.captain = player;
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
      points: 68,
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
      points: 57,
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
  points: 49,
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
  points: 52,
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
  points: 45,
  selected: false
},

{
  nameKz: 'Игорь Шацкий',
  nameRu: 'Игорь Шацкий',
  nameEn: 'Igor Shatskiy',

  clubKz: 'Шахтер',
  clubRu: 'Шахтер',
  clubEn: 'Shakhter',

  position: 'GK',
  price: 5.5,
  points: 58,
  selected: false
},

{
  nameKz: 'Мұхаммеджан Сейсен',
  nameRu: 'Мухаммеджан Сейсен',
  nameEn: 'Mukhammedzhan Seisen',

  clubKz: 'Астана',
  clubRu: 'Астана',
  clubEn: 'Astana',

  position: 'GK',
  price: 5.0,
  points: 41,
  selected: false
},

{
  nameKz: 'Ян Вороговский',
  nameRu: 'Ян Вороговский',
  nameEn: 'Yan Vorogovskiy',

  clubKz: 'Астана',
  clubRu: 'Астана',
  clubEn: 'Astana',

  position: 'DEF',
  price: 7.0,
  points: 61,
  selected: false
},

{
  nameKz: 'Лев Скворцов',
  nameRu: 'Лев Скворцов',
  nameEn: 'Lev Skvortsov',

  clubKz: 'Ақтөбе',
  clubRu: 'Актобе',
  clubEn: 'Aktobe',

  position: 'DEF',
  price: 6.0,
  points: 49,
  selected: false
},

{
  nameKz: 'Темірлан Ерланов',
  nameRu: 'Темирлан Ерланов',
  nameEn: 'Temirlan Erlanov',

  clubKz: 'Ордабасы',
  clubRu: 'Ордабасы',
  clubEn: 'Ordabasy',

  position: 'DEF',
  price: 6.5,
  points: 55,
  selected: false
},

{
  nameKz: 'Асхат Тағыберген',
  nameRu: 'Асхат Тагыберген',
  nameEn: 'Askhat Tagybergen',

  clubKz: 'Ордабасы',
  clubRu: 'Ордабасы',
  clubEn: 'Ordabasy',

  position: 'MID',
  price: 8.0,
  points: 64,
  selected: false
},

{
  nameKz: 'Елхан Астанов',
  nameRu: 'Елхан Астанов',
  nameEn: 'Elkhan Astanov',

  clubKz: 'Астана',
  clubRu: 'Астана',
  clubEn: 'Astana',

  position: 'MID',
  price: 7.0,
  points: 51,
  selected: false
},

{
  nameKz: 'Абылайхан Жұмабек',
  nameRu: 'Абылайхан Жумабек',
  nameEn: 'Abilaikhan Zhumabek',

  clubKz: 'Жетісу',
  clubRu: 'Жетысу',
  clubEn: 'Zhetysu',

  position: 'FWD',
  price: 7.0,
  points: 43,
  selected: false
},

{
  nameKz: 'Алибек Қасым',
  nameRu: 'Алибек Касым',
  nameEn: 'Alibek Kassym',

  clubKz: 'Ақтөбе',
  clubRu: 'Актобе',
  clubEn: 'Aktobe',

  position: 'DEF',
  price: 6.5,
  points: 62,
  selected: false
},

{
  nameKz: 'Сергей Малый',
  nameRu: 'Сергей Малый',
  nameEn: 'Sergey Maliy',

  clubKz: 'Ордабасы',
  clubRu: 'Ордабасы',
  clubEn: 'Ordabasy',

  position: 'DEF',
  price: 6.0,
  points: 58,
  selected: false
},

{
  nameKz: 'Марин Томасов',
  nameRu: 'Марин Томасов',
  nameEn: 'Marin Tomasov',

  clubKz: 'Астана',
  clubRu: 'Астана',
  clubEn: 'Astana',

  position: 'MID',
  price: 9.5,
  points: 82,
  selected: false
},

{
  nameKz: 'Исламбек Қуат',
  nameRu: 'Исламбек Куат',
  nameEn: 'Islambek Kuat',

  clubKz: 'Жеңіс',
  clubRu: 'Женис',
  clubEn: 'Zhenis',

  position: 'MID',
  price: 7.0,
  points: 53,
  selected: false
},

{
  nameKz: 'Жоао Пауло',
  nameRu: 'Жоао Пауло',
  nameEn: 'Joao Paulo',

  clubKz: 'Қайрат',
  clubRu: 'Кайрат',
  clubEn: 'Kairat',

  position: 'FWD',
  price: 9.0,
  points: 78,
  selected: false
},

{
  nameKz: 'Дастан Сәтпаев',
  nameRu: 'Дастан Сатпаев',
  nameEn: 'Dastan Satpayev',

  clubKz: 'Қайрат',
  clubRu: 'Кайрат',
  clubEn: 'Kairat',

  position: 'FWD',
  price: 7.5,
  points: 60,
  selected: false
},

{
  nameKz: 'Александр Заруцкий',
  nameRu: 'Александр Заруцкий',
  nameEn: 'Aleksandr Zarutskiy',

  clubKz: 'Қайрат',
  clubRu: 'Кайрат',
  clubEn: 'Kairat',

  position: 'GK',
  price: 6.5,
  points: 65,
  selected: false
},
  ];

}
