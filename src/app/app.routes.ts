import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { SearchComponent } from './pages/search/search.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kategori/:category', component: CategoryComponent },
  { path: 'arama', component: SearchComponent },
  { path: 'hakkimda', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
