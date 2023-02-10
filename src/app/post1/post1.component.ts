import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss'],
})
export class Post1Component {
  data: any;
  image: any;
  heading: any;
  desc: any;
  loadingStatus = '';
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data) => {
      if (Array.isArray(data)) {
        this.data = data[0];
        this.image = this.data.image;
        this.heading = this.data.heading;
        this.desc = this.data.desc;
      }
      this.loadingStatus = 'hidden';
    });
  }
}
