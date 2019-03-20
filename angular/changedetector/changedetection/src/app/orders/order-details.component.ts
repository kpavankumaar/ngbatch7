import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  ngOnChanges(){
    console.log('printing the data from OrderDetailsComponent ngOnchanges');
  }
  constructor(){
    console.log('printing the data from OrderDetailsComponent contructor');
  }

  ngOnInit() {
    console.log('printing the data from  OrderDetailsComponent ngOnInit');
  }
  ngDoCheck(){
    console.log('printing the data from ordersdetailscomponent ngDoCheck');
  }

}
