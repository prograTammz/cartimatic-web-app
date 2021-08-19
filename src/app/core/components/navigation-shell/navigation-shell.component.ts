import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import {
  ActivatedRoute,
  ActivationStart,
  ActivationEnd,
  Router,
  RouterOutlet,
  NavigationEnd,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slider } from 'src/app/app-routing.animation';
import { filter } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation-shell',
  templateUrl: './navigation-shell.component.html',
  styleUrls: ['./navigation-shell.component.scss'],
  animations: [slider],
})
export class NavigationShellComponent implements OnInit {
  @ViewChild('sideNav') sideNav: MatSidenav;
  // View States
  public viewWidth: number;
  public isDesktop: boolean;
  public lang: string;
  public rtl: boolean;
  public pageName: string;
  public showBack: boolean;
  constructor(
    private router: Router,
    private translate: TranslateService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.viewWidth = 0;
    this.isDesktop = false;
    this.lang = 'en';
    this.rtl = false;
    this.showBack = false;
    this.pageName = '';
    this.addIcons();
  }

  ngOnInit(): void {
    this.checkViewWidth();
    this.handleNavigationStart();
    this.handleNavigationEnd();
    this.handleLangChange();
    this.getRouteDate();
  }

  //Changes the APP language
  public changeLang(lang: string): void {
    this.translate.use(lang);
  }

  //Router back to previous route
  public goBack(): void {
    this.location.back();
  }

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  private handleLangChange(): void {
    this.translate.onLangChange.subscribe((langChange) => {
      this.lang = langChange.lang;
      if (langChange.lang === 'ar' || langChange.lang === 'ar-eg') {
        this.rtl = true;
      } else {
        this.rtl = false;
      }
    });
  }

  // Getting view width while init
  private checkViewWidth(): void {
    this.viewWidth = window.innerWidth;
    if (this.viewWidth > 1280) {
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
  }

  private handleNavigationStart(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        this.getRouteDate();
        if (!this.isDesktop) {
          this.sideNav.close();
        }
      }
    });
  }

  private handleNavigationEnd(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getRouteDate();
      });
  }

  private getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  private getRouteDate(): void {
    let rt = this.getChild(this.activatedRoute);
    rt.data.subscribe((data) => {
      this.showBack = data.showBack;
      this.pageName = data.pageName;
      document.title = this.translate.instant(this.pageName);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.viewWidth = event.target.innerWidth;
    this.isDesktop = false;
    if (this.viewWidth > 1280) {
      this.isDesktop = true;
    }
  }

  private addIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'eg',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/flags/eg.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'es',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/flags/es.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'gb',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/flags/gb.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'in',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/flags/in.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'sa',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/flags/sa.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'tr',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/flags/tr.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'us',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/flags/us.svg')
    );
  }
}
