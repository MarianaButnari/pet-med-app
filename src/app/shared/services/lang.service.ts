import {inject, Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {defaults} from "../../app.config";

import * as ro from '../../../assets/i18n/ro.json';
import * as en from '../../../assets/i18n/en.json';
import supportedLanguages from "../constants/lang.constants";
import {SessionStorageService} from "./session-storage.service";
import {Language} from "../models/language.model";


@Injectable({
  providedIn: 'root'
})
export class LangService {
  private sessionStorageService = inject(SessionStorageService);
  private translate = inject(TranslateService);

  isSingleLang = false;
  defaultLanguage = this.sessionStorageService.getFromLocalStorage('default_language') || defaults.language;
  supportedLanguages: Language[] = supportedLanguages;

  init() {
    const defaultLang: Language = this.supportedLanguages.find(lang => (lang.code === this.defaultLanguage) || (lang.shorthand === this.defaultLanguage))!;
    this.translate.setTranslation('en-us', en);
    this.translate.setTranslation('ro', ro);
    this.translate.setDefaultLang(defaultLang.shorthand);
    if (this.isSingleLang) {
      this.translate.use(defaultLang.shorthand);
    } else {
      this.language = '';
    }
  }

  set language(lang: string) {
    let language = lang || this.defaultLanguage;
    const isSupportedLang = this.supportedLanguages.map(lang => lang.shorthand).includes(language);
    if (!isSupportedLang) {
      language = this.defaultLanguage;
    }
    if (lang !== '' && this.supportedLanguages.map(item => item.shorthand).includes(lang)) {
      this.sessionStorageService.setToLocalStorage('default_language', lang);
      window.location.reload();
    } else {
      this.translate.use(language);
    }
    this.sessionStorageService.setToLocalStorage('default_language', language);
  }
}


