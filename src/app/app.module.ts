import { Whatever } from './app.whatever.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { CommonModule } from '@angular/common';
import { TraineeComponent } from './trainee/trainee.component';

@NgModule({
  declarations: [
    AppComponent,
    Whatever,
    AlbumComponent,
    TraineeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
