import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [NzMenuModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  constructor(private _Router: Router) {

  }

  RedirectToNarutoTopps() {
    this._Router.navigate(['/NarutoTopps']);
  }

  RedirectToHome() {
    this._Router.navigate(['/']);
  }
}
