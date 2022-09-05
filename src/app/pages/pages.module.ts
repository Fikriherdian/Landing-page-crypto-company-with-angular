import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { TodosComponent } from './todos/todos.component';
import { Artikel3Component } from './artikel3/artikel3.component';
// import { Artikel1Component } from './artikel1/artikel1.component';

@NgModule({
  declarations: [
    PagesComponent,
    TodosComponent,
    Artikel3Component,
    // Artikel1Component
  ],
  imports: [
    CommonModule,
    HomeModule,
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
