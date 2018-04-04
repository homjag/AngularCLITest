import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* App Routing - Component */

import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: 'posts',
        component: AppComponent
    }
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}