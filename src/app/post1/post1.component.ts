import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss'],
})
export class Post1Component {
  data = [];
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {});
  }
}
