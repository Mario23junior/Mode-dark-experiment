import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public icon:string = "sun"

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
   const themes = document.body.classList.toggle('dark-theme')

   if(themes){
     return this.icon = 'moon'
   }

   return this.icon = 'sun'
  }
}
