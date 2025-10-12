import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    { name: 'C#', level: 80 },
    { name: 'TypeScript', level: 65 },
    { name: 'JavaScript', level: 70 },
    { name: 'HTML5 & CSS3', level: 85 },
    { name: 'React', level: 70 },
    { name: 'Node.js', level: 75 }
  ];

  experiences = [
  {
    title: 'Junior Frontend Developer',
    company: 'Enoca',
    period: '2025 – Günümüz',
    description: 'Angular kullanarak kurumsal web uygulamaları geliştirme'
  },
  {
    title: 'Software Developer İnternship',
    company: 'Techcareer.net',            
    period: '2024 – 2024',     
    description: 'C# / .NET ile API geliştirme, Entity Framework ile veri modeli tasarımı ve veri yönetimi'
  },
  {
    title: 'Junior Software Developer',
    company: 'Piagmo Technology',           
    period: '2023 – 2023',
    description: 'Web projelerinde JavaScript ile frontend işleri, küçük backend görevleri ve yardımcı modüller geliştirme'
  }
];
  projects = [
  {
    name: 'CineSpot',
    description: 'ASP.NET Core MVC ve React + TypeScript ile geliştirilmiş, film keşif ve inceleme platformu',
    tech: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'MSSQL', 'Bootstrap', 'Sass']
  },
  {
    name: 'Kitaplik',
    description: 'React (Vite) + ASP.NET Core API tabanlı, SQLite üzerinde çalışan CRUD kitaplık uygulaması',
    tech: ['React', 'TypeScript', 'ASP.NET Core', 'SQLite', 'TailwindCSS']
  },
  {
    name: 'SmartStore',
    description: 'Full Stack akıllı mağaza uygulaması; stok yönetimi ve kullanıcı işlemleri',
    tech: ['C#', '.NET', 'Entity Framework Core', 'MSSQL', 'Bootstrap', 'jQuery']
  },
  {
    name: 'QuickPoll',
    description: 'ASP.NET Core MVC tabanlı, canlı sonuçları anında gösteren anket uygulaması',
    tech: ['C#', 'ASP.NET Core MVC', 'SignalR', 'Bootstrap', 'jQuery']
  },
  {
    name: 'TaskManager',
    description: 'Vue.js ile geliştirilmiş görev yöneticisi; tema desteği ve filtreleme özellikleriyle',
    tech: ['Vue.js', 'JavaScript', 'CSS', 'Vuetify']
  },
  {
    name: 'Portfolio',
    description: 'React tabanlı kişisel portfolyo sitesi; modern tasarım ve animasyonlarla desteklenmiş',
    tech: ['React', 'TypeScript', 'SCSS', 'Framer Motion', 'TailwindCSS']
  },
  {
    name: 'InventoryPilot',
    description: 'C# ile geliştirilmiş stok ve envanter yönetimi uygulaması',
    tech: ['C#', '.NET', 'MSSQL', 'Bootstrap']
  },
  {
    name: 'Techcareer.netProje',
    description: 'React.js ile eğitim kapsamında geliştirilmiş grup projesi; modern UI ve etkileşimli tasarım',
    tech: ['React', 'JavaScript', 'CSS', 'Bootstrap']
  },
  {
    name: 'RentACar',
    description: 'C# ve .NET ile geliştirilmiş araç kiralama uygulaması',
    tech: ['C#', '.NET', 'MSSQL', 'Bootstrap']
  },
  {
    name: 'TodoList',
    description: 'C# ile geliştirilmiş görev takip (To-Do) uygulaması',
    tech: ['C#', '.NET', 'MSSQL', 'Bootstrap']
  }
];

}
