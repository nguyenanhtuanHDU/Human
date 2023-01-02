import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.scss'],
})
export class Post3Component {
  data: any;
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.data = data;
      console.log('>>>>  this.data', this.data);
    });
  }
}
