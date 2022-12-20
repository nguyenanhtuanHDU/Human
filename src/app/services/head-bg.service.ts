import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImgService {
  constructor(private http: HttpClient) {}
  getHeadBg(): Observable<any> {
    return this.http.get<any>(
      'https://639ad18fd514150197403be5.mockapi.io/api/head-bg'
    );
  }
}
