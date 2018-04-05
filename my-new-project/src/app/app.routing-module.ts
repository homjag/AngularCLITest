import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'posts',
        component: PostComponent
    }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}