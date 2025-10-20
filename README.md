📰 NewspaperFrontend
Genel Bakış
NewspaperFrontend, Angular 20 ile geliştirilmiş modern, duyarlı (responsive) bir haber portalı projesidir.
Proje, NewsAPI üzerinden Türkiye (country=tr) haberlerini çekerek kullanıcıya kategori bazlı olarak gösterir.
Ana sayfada slider, kategori sayfalarında filtreleme paneli, arama ve “Hakkımda” sayfası gibi bölümler bulunur.

🚀 Kullanılan Teknolojiler
Teknoloji Sürüm Açıklama
Angular ^20.0.0 Frontend framework
RxJS ^7.8.1 Reaktif programlama
TypeScript ^5.x Geliştirme dili
HTML5 / CSS3 — Arayüz ve stil
Bitbucket — Versiyon kontrol sistemi
⚙️ Kurulum ve Geliştirme Ortamı
Gereksinimler
Node.js (LTS sürümü)
Angular CLI
npm install -g @angular/cli@20
Kurulum
git clone <bitbucket-repo-url>
cd newspaper-frontend
npm install
Geliştirme Sunucusu
ng serve
Uygulama çalıştığında tarayıcıda şu adrese gidin: http://localhost:4200
Angular otomatik olarak dosya değişikliklerini algılar ve sayfayı yeniler.

🏗️ Proje Yapısı
src/
├─ app/
│ ├─ core/
│ │ ├─ services/
│ │ │ └─ news.service.ts
│ │ └─ models/
│ │ └─ news.model.ts
│ ├─ shared/
│ │ └─ components/
│ │ ├─ header/
│ │ ├─ slider/
│ │ └─ pagination/
│ ├─ pages/
│ │ ├─ home/
│ │ ├─ category/
│ │ ├─ search/
│ │ └─ about/
│ ├─ app-routing.module.ts
│ └─ app.component.ts
├─ assets/
├─ environments/
│ ├─ environment.ts
│ └─ environment.prod.ts
└─ index.html
🌐 API Kullanımı
Temel API
Proje, NewsAPI servisini kullanır:
👉 https://newsapi.org/v2/everything/top-headlines

API Key
Projede kullanılacak API Key:

676f017549224f488970f1835f9db971
Örnek İstekler
Ana sayfa (kategori olmadan):
https://newsapi.org/v2/top-headlines?country=tr&apiKey=YOUR_API_KEY&page=1&pageSize=20
Kategori sayfası:
https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=YOUR_API_KEY
Arama sayfası:
https://newsapi.org/v2/everything?q=teknoloji&apiKey=YOUR_API_KEY
🧠 Özellikler
✅ Ana Sayfa - Üstte 3 haberlik slider

- Altta haber listesi
- Sayfalama desteği

✅ Kategori Sayfaları - Kategoriler: business, entertainment, general, health, science, sports, technology

- Solda filtreleme paneli
- Sağda haber listesi

✅ Arama Sayfası - Header'da bulunan arama kutusu üzerinden erişilir

- Aranan kelime başlıkta gösterilir

✅ Hakkımda Sayfası - Kişisel CV tarzı bilgi sayfası

- Gerçek bilgilerle doldurulmalı

✅ Header - Sol üst: Geliştirici adı

- Sağ üst: Arama kutusu
- Altında: Kategori menüsü (aktif sayfa vurgulu)

📄 Sayfalama Mantığı
NewsAPI’den gelen totalResults değeri üzerinden sayfa sayısı hesaplanır:

pageCount = Math.ceil(totalResults / pageSize);
Örn:

- totalResults = 38, pageSize = 20 → 2 sayfa
- totalResults = 20, pageSize = 20 → 1 sayfa
  🧩 Servis Örneği
  @Injectable({ providedIn: 'root' })
  export class NewsService {
  private readonly API_KEY = '676f017549224f488970f1835f9db971';
  private readonly BASE_URL = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) {}

  getTopHeadlines(params: { category?: string; q?: string; page?: number; pageSize?: number }) {
  const query = {
  country: 'tr',
  apiKey: this.API_KEY,
  ...params,
  };
  return this.http.get(`${this.BASE_URL}/top-headlines`, { params: query });
  }
  }
  🧪 Testler
  Unit Test (Karma)
  ng test
  E2E Test (isteğe bağlı)
  ng e2e
  🧭 Versiyon Kontrol
  Sistem: Bitbucket
  Önerilen Branch Stratejisi:
  main → production
  develop → test ortamı
  feature/\* → yeni geliştirmeler
  🪶 Tasarım Notları
  Tasarım referansı: Meranda Template
  Responsive yapı zorunludur.
  Footer opsiyoneldir.
  Slider, kartlar ve filtre bölümü flex veya grid tabanlı tasarlanabilir.
  📋 Geliştirici İçin Checklist
  Görev Durum
  Angular yapı kurulumu ☐
  API entegrasyonu (NewsService) ☐
  Slider bileşeni ☐
  Kategori sayfaları ☐
  Arama sayfası ☐
  Hakkımda sayfası ☐
  Responsive düzen ☐
  Sayfalama bileşeni ☐
  Unit testler ☐
  👤 Geliştirici Bilgisi
  Ad Soyad: Esra Yılmaz
  E-posta: dev.esrayilmaz@gmail.com
  Lokasyon: İstanbul, Türkiye
