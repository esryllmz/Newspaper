import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="app">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <div class="container">
          <p>&copy; 2025 Esra Yılmaz - Angular News Portal. Tüm hakları saklıdır.</p>
          <p class="footer-info">NewsAPI.org tarafından desteklenmektedir</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
    }

    .footer {
      background: #2c3e50;
      color: white;
      padding: 2rem 0;
      margin-top: 3rem;
    }

    .footer .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      text-align: center;
    }

    .footer p {
      margin: 0.5rem 0;
      font-size: 0.95rem;
    }

    .footer-info {
      color: #95a5a6;
      font-size: 0.85rem;
    }
  `]
})
export class AppComponent {}
