import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cartimatic';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar', 'ar-eg']);
    translate.setDefaultLang('ar-eg');

    this.languageDirectionChangeHandler();

    this.checkBrowserDefaultLanguage();
  }

  //Check if the language changed is RTL or Not to change DOM direction
  private languageDirectionChangeHandler(): void {
    this.translate.onLangChange.subscribe((langChange) => {
      document.documentElement.lang = langChange.lang;
      if (langChange.lang === 'ar' || langChange.lang === 'ar-eg') {
        document.dir = 'rtl';
      } else {
        document.dir = 'ltr';
      }
    });
  }

  //If the user's browser language doesn't match any of current language set it to English
  private checkBrowserDefaultLanguage(): void {
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ar|ar-eg/) ? browserLang : 'en');
  }
}
