import { Component } from '@angular/core';
import { links, langs } from './header-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links = links;
  langs = langs;
  lang: any = 'en';

  changeLanguage(lang:string) {
    if (this.lang == lang) {
      localStorage.setItem('language', lang);
    } else {
      localStorage.setItem('language', lang);
    }
    window.location.reload();
  }
}
