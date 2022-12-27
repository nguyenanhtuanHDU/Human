import { Component } from '@angular/core';
import { NewsService } from './news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newsList: any;
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.newsList = data;
    });
  }
}
