import { Component, OnInit } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = ETheme.ICON_SUN

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    const themes = document.body.classList.toggle('dark-theme')

    if (themes) {
      return this.icon = ETheme.ICON_MON
    }

    return this.icon = ETheme.ICON_SUN
  }
}
