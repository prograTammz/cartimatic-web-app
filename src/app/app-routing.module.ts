import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationShellComponent} from './core/components/navigation-shell/navigation-shell.component';

const routes: Routes = [
  {
    path: 'app',
    component: NavigationShellComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
