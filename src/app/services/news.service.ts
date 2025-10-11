import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { NewsResponse } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly API_KEY = '676f017549224f488970f1835f9db971';
  private readonly BASE_URL = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  getTopHeadlines(page: number = 1, pageSize: number = 10): Observable<NewsResponse> {
    const url = `${this.BASE_URL}?country=tr&page=${page}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
    return this.http.get<NewsResponse>(url).pipe(
      catchError(error => {
        console.error('Error fetching top headlines:', error);
        return of({ status: 'error', totalResults: 0, articles: [] });
      })
    );
  }

  getCategoryNews(category: string, page: number = 1, pageSize: number = 10): Observable<NewsResponse> {
    const url = `${this.BASE_URL}?country=tr&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
    return this.http.get<NewsResponse>(url).pipe(
      catchError(error => {
        console.error(`Error fetching ${category} news:`, error);
        return of({ status: 'error', totalResults: 0, articles: [] });
      })
    );
  }

  searchNews(query: string, page: number = 1, pageSize: number = 10): Observable<NewsResponse> {
    const url = `${this.BASE_URL}?country=tr&q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
    return this.http.get<NewsResponse>(url).pipe(
      catchError(error => {
        console.error(`Error searching for ${query}:`, error);
        return of({ status: 'error', totalResults: 0, articles: [] });
      })
    );
  }
}
