import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.scss'],
})
export class Post3Component {
  data: any;
  image: any;
  heading: any;
  desc: any;
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      if (Array.isArray(data)) {
        this.data = data[2];
        this.image = this.data.image;
        this.heading = this.data.heading;
        this.desc = this.data.desc;
      }
    });
  }
}
