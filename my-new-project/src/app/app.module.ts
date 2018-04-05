import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { PostModule } from './post/post.module';
import { PopupModule } from './popup/popup.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PostModule,
    PopupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
