import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Artikel3Component } from "./pages/artikel3/artikel3.component";
import { HomeComponent } from "./pages/home/home.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { TodosComponent } from "./pages/todos/todos.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'artikel1',
    component: ResumeComponent
  },
  {
    path: 'artikel2',
    component: TodosComponent
  },
  {
    path: 'artikel3',
    component: Artikel3Component
  },
  
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
