import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [NavbarComponent],
  exports:[NavbarComponent],
  providers:[]
})
export class CoreModule { }
