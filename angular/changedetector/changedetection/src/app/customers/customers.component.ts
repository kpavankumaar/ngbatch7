import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit,OnChanges {
  data = [1,2,3,4,5];
  ngOnChanges(){
    console.log('printing the data from CustomersComponent component ngOnchanges');
  }
  constructor(){
    console.log('printing the data from CustomersComponent contructor');
  }
  ngOnInit() {
    console.log('printing the data from CustomersComponent  ngOnInit');
  }
  

}
