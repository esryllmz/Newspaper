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
  sliderArticles: NewsArticle[] = [
  {
    title: 'Yapay Zeka Dünyayı Değiştiriyor',
    description: 'Yapay zeka teknolojileri eğitim, sağlık ve iş dünyasında köklü değişiklikler yaratıyor.',
    url: 'https://www.example.com/news/ai',
    urlToImage: 'assets/images/ai-news.jpg',
    publishedAt: '2025-10-10T08:00:00Z',
    author: 'Tech Daily',
    source: { id: null, name: 'Tech Daily' }, // ekledik
    content: 'Detaylı içerik burada...' // ekledik
  },
  {
    title: 'Ekonomide Toparlanma Sinyalleri',
    description: 'Uzmanlara göre yılın son çeyreğinde ekonomik göstergelerde toparlanma bekleniyor.',
    url: 'https://www.example.com/news/economy',
    urlToImage: 'assets/images/economy.jpg',
    publishedAt: '2025-10-11T09:30:00Z',
    author: 'Ekonomi Günlüğü',
    source: { id: null, name: 'Ekonomi Günlüğü' },
    content: 'Detaylı içerik burada...'
  },
  {
    title: 'Spor Dünyasında Transfer Rüzgarı',
    description: 'Avrupa futbolunda sürpriz transferler gündemde.',
    url: 'https://www.example.com/news/sports',
    urlToImage: 'assets/images/sports.jpg',
    publishedAt: '2025-10-12T10:00:00Z',
    author: 'SportsMag',
    source: { id: null, name: 'SportsMag' },
    content: 'Detaylı içerik burada...'
  }
];
  newsArticles: NewsArticle[] = [
  {
    title: 'Yapay Zeka Dünyayı Değiştiriyor',
    description: 'Yapay zeka teknolojileri eğitim, sağlık ve iş dünyasında köklü değişiklikler yaratıyor.',
    url: 'https://www.example.com/news/ai',
    urlToImage: 'assets/images/ai-news.jpg',
    publishedAt: '2025-10-10T08:00:00Z',
    author: 'Tech Daily',
    source: { id: null, name: 'Tech Daily' }, // ekledik
    content: 'Detaylı içerik burada...' // ekledik
  },
  {
    title: 'Ekonomide Toparlanma Sinyalleri',
    description: 'Uzmanlara göre yılın son çeyreğinde ekonomik göstergelerde toparlanma bekleniyor.',
    url: 'https://www.example.com/news/economy',
    urlToImage: 'assets/images/economy.jpg',
    publishedAt: '2025-10-11T09:30:00Z',
    author: 'Ekonomi Günlüğü',
    source: { id: null, name: 'Ekonomi Günlüğü' },
    content: 'Detaylı içerik burada...'
  },
  {
    title: 'Spor Dünyasında Transfer Rüzgarı',
    description: 'Avrupa futbolunda sürpriz transferler gündemde.',
    url: 'https://www.example.com/news/sports',
    urlToImage: 'assets/images/sports.jpg',
    publishedAt: '2025-10-12T10:00:00Z',
    author: 'SportsMag',
    source: { id: null, name: 'SportsMag' },
    content: 'Detaylı içerik burada...'
  }
];
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
