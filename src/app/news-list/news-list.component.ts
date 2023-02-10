import { Component, Input } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent {
  newsList: any;
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data) => {
      this.newsList = data;
    });
  }
}
