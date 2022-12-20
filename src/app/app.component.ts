import { Component, Input } from '@angular/core';
import { ImgService } from './services/head-bg.service';
import { NewsItemComponent } from './news-item/news-item.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgs: any;
  headBg: any;
  constructor(private img: ImgService) {}
  ngOnInit(): void {
    this.img.getHeadBg().subscribe((res) => {
      this.headBg = res[0].url;
    });
  }
}
