import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news.model';
import { SliderComponent } from '../../components/slider/slider.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent, NewsCardComponent, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sliderArticles: NewsArticle[] = [];
  newsArticles: NewsArticle[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 12;
  loading: boolean = false;
  error: string = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.loading = true;
    this.error = '';

    this.newsService.getTopHeadlines(this.currentPage, this.pageSize + 3).subscribe({

      next: (response) => {
        console.log('API response:', response);
        console.log('Articles:', response.articles);
        if (response.articles && response.articles.length > 0) {
        
          this.sliderArticles = response.articles.slice(0, 3);
          
          this.newsArticles = response.articles.slice(3);
          
          this.totalPages = Math.ceil(response.totalResults / this.pageSize);
        } else {
          this.error = 'Haber bulunamadı.';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading news:', err);
        this.error = 'Haberler yüklenirken bir hata oluştu.';
        this.loading = false;
      }
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadNews();
  }
}
