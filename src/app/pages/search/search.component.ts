import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news.model';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, NewsCardComponent, PaginationComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  currentQuery: string = '';
  newsArticles: NewsArticle[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 12;
  loading: boolean = false;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['q'];
      if (query) {
        this.currentQuery = query;
        this.searchQuery = query;
        this.currentPage = 1;
        this.performSearch();
      }
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/arama'], { queryParams: { q: this.searchQuery } });
    }
  }

  performSearch(): void {
    if (!this.currentQuery) return;

    this.loading = true;
    this.error = '';

    this.newsService.searchNews(this.currentQuery, this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        if (response.articles && response.articles.length > 0) {
          this.newsArticles = response.articles;
          this.totalPages = Math.ceil(response.totalResults / this.pageSize);
        } else {
          this.error = 'Arama sonucu bulunamadı.';
          this.newsArticles = [];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error searching news:', err);
        this.error = 'Arama yapılırken bir hata oluştu.';
        this.loading = false;
      }
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.performSearch();
  }
}
