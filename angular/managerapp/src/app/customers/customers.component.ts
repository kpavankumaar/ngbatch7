import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[]
})
export class CustomersComponent implements OnInit {
  customers;
  cardViewStatus:boolean;
  gridViewStatus:boolean;
  loadCardView(){
    this.cardViewStatus = true;
    this.gridViewStatus = false;
  }
  loadGridView(){
    this.cardViewStatus = false;
    this.gridViewStatus = true;
  }

  constructor( private dataService: DataService) { 
    console.log('customers component ');

  }

  ngOnInit() {
    this.dataService.getCustomersData().subscribe(
      (customers) => {
        this.customers = customers;
        console.log(this.customers)
      },
      (err) => { console.log("err",err)}
    )
  }

}
