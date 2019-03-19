import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ngOnChanges(){
    console.log('printing the data from orders component ngOnchanges');
  }
  constructor(){
    console.log('printing the data from OrdersComponent contructor');
  }

  ngOnInit() {
    console.log('printing the data from  OrdersComponent ngOnInit');
  }

}
