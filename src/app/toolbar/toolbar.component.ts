import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  activeLink: string = "";

  setActiveLink(link: string) {
    this.activeLink = link;
  }
  
}
