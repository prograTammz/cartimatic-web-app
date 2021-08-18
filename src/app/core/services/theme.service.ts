import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _themeDark: Subject<Boolean> = new Subject<Boolean>();
  isThemeDark: Observable<Boolean> = this._themeDark.asObservable();

  constructor(private meta: Meta) {}

  toggleTheme(): void {
    if (this.isThemeDark) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  setDarkTheme(): void {
    let bodyElementClasses = document.body.classList;
    if (!bodyElementClasses.contains('dark')) {
      this._themeDark.next(true);
      document.body.classList.add('dark');
      this.meta.updateTag({ content: '#14142B' }, 'name=theme-color');
    }
    //TODO: Dispatch settings action
  }

  setLightTheme(): void {
    let bodyElementClasses = document.body.classList;
    if (bodyElementClasses.contains('dark')) {
      this._themeDark.next(false);
      document.body.classList.remove('dark');
      this.meta.updateTag({ content: '#f7f7fc' }, 'name=theme-color');
    }
    //TODO: Dispatch settings action
  }
}
