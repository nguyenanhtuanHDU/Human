import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss'],
})
export class Post2Component {
  data: any;
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.data = data;
    });
  }
}
