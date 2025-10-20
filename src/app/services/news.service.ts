import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { NewsResponse } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly API_KEY = '1d86bff7f6f64b9a9f1509aa0c0439c4';
  private readonly BASE_URL = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) {}


  getCategoryNews(category: string, page: number = 1, pageSize: number = 12): Observable<NewsResponse> {
    if (!category || category.trim() === '') {
      return of({ status: 'error', totalResults: 0, articles: [] });
    }

    const url = `${this.BASE_URL}?q=${encodeURIComponent(category)}&language=tr&sortBy=publishedAt&page=${page}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
    return this.http.get<NewsResponse>(url).pipe(
      catchError(error => {
        console.error(`Error fetching ${category} news:`, error);
        return of({ status: 'error', totalResults: 0, articles: [] });
      })
    );
  }

  searchNews(query: string, page: number = 1, pageSize: number = 12): Observable<NewsResponse> {
    if (!query || query.trim() === '') {
      return of({ status: 'error', totalResults: 0, articles: [] });
    }

    const url = `${this.BASE_URL}?q=${encodeURIComponent(query)}&language=tr&sortBy=publishedAt&page=${page}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
    return this.http.get<NewsResponse>(url).pipe(
      catchError(error => {
        console.error(`Error searching for ${query}:`, error);
        return of({ status: 'error', totalResults: 0, articles: [] });
      })
    );
  }

 getTopHeadlines(page: number = 1, pageSize: number = 12): Observable<NewsResponse> {
  const url = `${this.BASE_URL}?q=haber&language=tr&sortBy=publishedAt&page=${page}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
  return this.http.get<NewsResponse>(url).pipe(
    catchError(error => {
      console.error('Error fetching top headlines:', error);
      return of({ status: 'error', totalResults: 0, articles: [] });
    })
  );
}

}
