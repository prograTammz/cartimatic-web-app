import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-shell',
  templateUrl: './navigation-shell.component.html',
  styleUrls: ['./navigation-shell.component.scss'],
})
export class NavigationShellComponent implements OnInit {
  @ViewChild('sideNav') sideNav: MatSidenav;
  // View States
  public viewWidth: number;
  public isDesktop: boolean;
  public lang: string;
  constructor(
    public router: Router,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.addIcons();
    this.viewWidth = 0;
    this.isDesktop = false;
    this.lang = 'en';
  }

  ngOnInit(): void {
    this.checkViewWidth();
    this.handleNewNavigation();
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

  private handleNewNavigation(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && !this.isDesktop) {
        this.sideNav.close();
      }
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
}
