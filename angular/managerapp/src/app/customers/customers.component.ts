import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
