import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
  imports: [RouterOutlet, CommonModule, SharedModule],
})
export class AppComponent implements OnInit {
  title = 'medicalita-app';
  private translationService = inject(TranslateService);
  constructor(private translate: TranslateService) {
    if ('language' in localStorage) {
      this.lang = localStorage.getItem('language');
      translate.use(this.lang);
    }else{
      translate.use(this.translate.defaultLang)
    }
  }
  lang: any;
  ngOnInit(): void {

    this.translationService.setDefaultLang('en');
  }
}
