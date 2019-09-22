import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';


// import { CakeComponent } from './cake/cake.component'; // <-- import FormsModule.


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NewComponent,
    EditComponent,
    // CakeComponent
  ],
  providers: [
    HttpService
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- register FormsModule with our app.
    HttpClientModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
