import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {
  constructor(private sanitizer: DomSanitizer) { }
  public videoUrl: SafeResourceUrl | undefined;
  ngOnInit() {
    const videoPath = './assets/PROLABORATE-HOME-PAGE-VIDEO.mp4'; // replace with the path to your video file
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
  }
}
