import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  ngOnChanges(){
    console.log('printing the data from orders component ngOnchanges');
  }
  constructor(){
    console.log('printing the data from OrdersComponent contructor');
  }

  ngOnInit() {
    console.log('printing the data from  OrdersComponent ngOnInit');
  }
  ngDoCheck(){
    console.log('printing the data from ordersComponent ngDoCheck');
  }
  ngOnDestroy(){
    console.log('printing the data from ordersComponent ngOnDestroy');
  }
}
