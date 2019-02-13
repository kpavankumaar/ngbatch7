import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';

const routes:Routes = [
  {path:'',
  component:CustomersComponent,
  children:[
    {path:'card', component:CustomersCardComponent},
    {path:'grid', component:CustomersGridComponent}
  ]
  }
]
@NgModule({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports:[RouterModule]

})
export class RoutingModule { }
