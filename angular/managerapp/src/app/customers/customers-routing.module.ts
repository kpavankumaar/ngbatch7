import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomersCardComponent } from './customers-card.component';

const routes: Routes = [
  {path:'',component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { 
  static component = [CustomersComponent, CustomersCardComponent, CustomersGridComponent];
}
