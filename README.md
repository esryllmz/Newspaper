
# 📰 Newspaper

## 🔍 Genel Bakış
**Newspaper**, **Angular 20** ile geliştirilmiş modern, duyarlı (responsive) bir haber portalı projesidir.  
Uygulama, **NewsAPI** üzerinden Türkiye (`country=tr`) haberlerini çekerek kullanıcıya kategori bazlı olarak sunar.  

Ana sayfada **slider**, kategori sayfalarında **filtreleme paneli**, **arama alanı** ve **“Hakkımda”** sayfası gibi bölümler bulunur.

---

## 🚀 Kullanılan Teknolojiler

| Teknoloji | Sürüm | Açıklama |
|------------|--------|----------|
| Angular | ^20.0.0 | Frontend framework |
| RxJS | ^7.8.1 | Reaktif programlama kütüphanesi |
| TypeScript | ^5.x | Geliştirme dili |
| HTML5 / CSS3 | — | Arayüz ve stil oluşturma |
| Bitbucket / GitHub | — | Versiyon kontrol sistemi |

---

## ⚙️ Kurulum ve Geliştirme Ortamı

### Gereksinimler
- **Node.js** (LTS sürümü)
- **Angular CLI**

CLI kurulumu:
```bash
npm install -g @angular/cli@20
```

### Kurulum Adımları
```bash
git clone <github-repo-url>
cd newspaper-frontend
npm install
```

### Geliştirme Sunucusu
```bash
ng serve
```
Uygulama çalıştığında tarayıcıda şu adrese gidin:  
👉 [http://localhost:4200](http://localhost:4200)

Angular, dosya değişikliklerini otomatik olarak algılar ve sayfayı yeniler.

---

## 🏗️ Proje Yapısı
```
src/
├─ app/
│  ├─ core/
│  │  ├─ services/
│  │  │  └─ news.service.ts
│  │  └─ models/
│  │     └─ news.model.ts
│  ├─ shared/
│  │  └─ components/
│  │     ├─ header/
│  │     ├─ slider/
│  │     └─ pagination/
│  ├─ pages/
│  │  ├─ home/
│  │  ├─ category/
│  │  ├─ search/
│  │  └─ about/
│  ├─ app-routing.module.ts
│  └─ app.component.ts
├─ assets/
├─ environments/
│  ├─ environment.ts
│  └─ environment.prod.ts
└─ index.html
```

---

## 🌐 API Kullanımı

### Temel API
Proje, [**NewsAPI**](https://newsapi.org/v2/everything/top-headlines) servisini kullanır.

### Örnek İstekler

**Ana sayfa (kategori olmadan):**
```
https://newsapi.org/v2/top-headlines?country=tr&apiKey=YOUR_API_KEY&page=1&pageSize=20
```

**Kategori sayfası:**
```
https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=YOUR_API_KEY
```

**Arama sayfası:**
```
https://newsapi.org/v2/everything?q=teknoloji&apiKey=YOUR_API_KEY
```

---

## 🧠 Özellikler

### ✅ Ana Sayfa
- Üstte 3 haberlik slider  
- Altta haber listesi  
- Sayfalama desteği  

### ✅ Kategori Sayfaları
- Kategoriler: business, entertainment, general, health, science, sports, technology  
- Solda filtreleme paneli  
- Sağda haber listesi  

### ✅ Arama Sayfası
- Header’daki arama kutusundan erişilir  
- Aranan kelime başlıkta gösterilir  

### ✅ Hakkımda Sayfası
- Kişisel CV tarzı bilgi sayfası  
- Gerçek bilgilerle doldurulabilir  

### ✅ Header
- Sol üstte geliştirici adı  
- Sağ üstte arama kutusu  
- Altında kategori menüsü (aktif sayfa vurgulu)

---

## 📄 Sayfalama Mantığı
NewsAPI’den dönen `totalResults` değeri üzerinden sayfa sayısı hesaplanır:
```typescript
pageCount = Math.ceil(totalResults / pageSize);
```
**Örnek:**
- totalResults = 38, pageSize = 20 → 2 sayfa  
- totalResults = 20, pageSize = 20 → 1 sayfa  

---

## 🧩 Servis Örneği
```typescript
@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly API_KEY = 'YOUR_API_KEY';
  private readonly BASE_URL = 'https://newsapi.org/v2';

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
```

---



## 📋 Geliştirici Checklist

| Görev | Durum |
|--------|--------|
| Angular yapı kurulumu | ☐ |
| API entegrasyonu (NewsService) | ☐ |
| Slider bileşeni | ☐ |
| Kategori sayfaları | ☐ |
| Arama sayfası | ☐ |
| Hakkımda sayfası | ☐ |
| Responsive düzen | ☐ |
| Sayfalama bileşeni | ☐ |

---

## 👤 Geliştirici Bilgisi
**Ad Soyad:** Esra Yılmaz  
**E-posta:** dev.esrayilmaz@gmail.com  
**Lokasyon:** İstanbul, Türkiye
````
