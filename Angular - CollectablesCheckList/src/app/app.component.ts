import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { MenuBarComponent } from "./Components/MenuBar/menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _Title: Title) {
    this._Title.setTitle("Collectables Check List");
  }
}
