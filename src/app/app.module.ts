import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { CommonModule } from '@angular/common';
import { TraineeComponent } from './trainee/trainee.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewTraineeComponent } from './new-trainee/new-trainee.component';
import { UpdateTraineeComponent } from './update-trainee/update-trainee.component';
import { DeleteTraineeComponent } from './delete-trainee/delete-trainee.component';
import { ViewTraineeComponent } from './view-trainee/view-trainee.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    TraineeComponent,
    FormComponent,
    ReactiveformComponent,
    HomeComponent,
    PageNotFoundComponent,
    NewTraineeComponent,
    UpdateTraineeComponent,
    DeleteTraineeComponent,
    ViewTraineeComponent,
    EmployeeComponent
  ],
  entryComponents: [],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
