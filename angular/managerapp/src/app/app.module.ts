import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './approuting.module';
import { CoreModule } from './core/core.module';
import { DataService } from './core/services/data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule, 
    AppRoutingModule, 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
