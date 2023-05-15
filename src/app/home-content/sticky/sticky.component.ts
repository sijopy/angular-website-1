import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent {
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // Get the current scroll position
    let scrollPosition = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

 
    if (scrollPosition >= 100) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
