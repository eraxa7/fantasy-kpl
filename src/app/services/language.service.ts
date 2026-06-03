import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = 'kz';

  setLanguage(language: string) {
    this.currentLanguage = language;
  }

}