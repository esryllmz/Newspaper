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
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 }
  ];

  experiences = [
    {
      title: 'Junior Frontend Developer',
      company: 'Enoca',
      period: '2025 - Günümüz',
      description: 'Angular ve React kullanarak kurumsal web uygulamaları geliştirme'
    }
  ];

  projects = [
    {
      name: 'Portfolio',
      description: 'React tabanlı modern web uygulaması',
      tech: ['React', 'TypeScript', 'SCSS']
    }
   
  ];
}
