import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticle } from '../../models/news.model';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input() article!: NewsArticle;
  @Input() featured: boolean = false;

  get formattedDate(): string {
    if (!this.article?.publishedAt) return '';
    const date = new Date(this.article.publishedAt);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  openArticle(): void {
    if (this.article?.url) {
      window.open(this.article.url, '_blank');
    }
  }
}
