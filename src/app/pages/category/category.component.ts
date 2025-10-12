import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news.model';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, PaginationComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: string = '';
  categoryTitle: string = '';
  newsArticles: NewsArticle[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 12;
  loading: boolean = false;
  error: string = '';

  private categoryNames: { [key: string]: string } = {
    'business': 'İş Dünyası',
    'entertainment': 'Eğlence',
    'general': 'Genel',
    'health': 'Sağlık',
    'science': 'Bilim',
    'sports': 'Spor',
    'technology': 'Teknoloji'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.setCategory(params['category']);
    });
  }

  setCategory(selectedCategory: string) {
    if (!selectedCategory || this.category === selectedCategory) return;

    this.category = selectedCategory;
    this.categoryTitle = this.categoryNames[selectedCategory] || selectedCategory;
    this.currentPage = 1;

    this.router.navigate(['/kategori', selectedCategory], { replaceUrl: true });

    this.loadCategoryNews();
  }

  onCategoryClick(selectedCategory: string) {
    this.setCategory(selectedCategory);
  }

  loadCategoryNews(): void {
    this.loading = true;
    this.error = '';

    this.newsService.getCategoryNews(this.category, this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        if (response.articles && response.articles.length > 0) {
          this.newsArticles = response.articles;
          this.totalPages = Math.ceil(response.totalResults / this.pageSize);
        } else {
          this.error = 'Bu kategoride haber bulunamadı.';
          this.newsArticles = [];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading category news:', err);
        this.error = 'Haberler yüklenirken bir hata oluştu.';
        this.loading = false;
      }
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCategoryNews();
  }
}
