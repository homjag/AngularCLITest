import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { PostComponent } from './post.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [ PostService ],
  bootstrap: [ PostComponent ],
  exports: [ PostComponent ]
})
export class PostModule { }