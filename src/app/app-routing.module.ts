import { Post1Component } from './post1/post1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/1', component: Post1Component },
  { path: 'post/2', component: Post2Component },
  { path: 'post/3', component: Post3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
