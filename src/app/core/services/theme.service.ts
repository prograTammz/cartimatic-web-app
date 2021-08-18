import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _themeDark: Subject<Boolean> = new Subject<Boolean>();
  isThemeDark: Observable<Boolean> = this._themeDark.asObservable();

  constructor() {}

  toggleTheme(): void {
    this._themeDark.next(!this.isThemeDark);
    let bodyElementClasses = document.body.classList;
    bodyElementClasses.toggle('dark');
    //TODO: Dispatch settings action
  }

  setDarkTheme(): void {
    this._themeDark.next(true);
    let bodyElementClasses = document.body.classList;
    if (!bodyElementClasses.contains('dark')) {
      document.body.classList.add('dark');
    }
    //TODO: Dispatch settings action
  }

  setLightTheme(): void {
    this._themeDark.next(true);

    let bodyElementClasses = document.body.classList;
    if (bodyElementClasses.contains('dark')) {
      document.body.classList.remove('dark');
    }
    //TODO: Dispatch settings action
  }
}
