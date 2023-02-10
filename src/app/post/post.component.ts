import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  heading = '';
  desc = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getPostById('1').subscribe((data: any) => {
      this.heading = data.heading;
      this.desc = data.desc;
    });
  }
}
