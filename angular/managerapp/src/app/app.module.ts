import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './approuting.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { AuthService } from './core/services/auth.service';
import { SortByDirective } from './shared/directives/sortby.directive';


@NgModule({
  declarations: [
    AppComponent,SortByDirective
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
