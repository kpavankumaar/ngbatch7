import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer;
  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    console.log(this.route);
    console.log(this.dataService);
    let id:number
    this.route.parent.params.subscribe(function(params){
      console.log(params);
      id = params['id'];
    })
    this.dataService.getCustomer(id).subscribe((cust) =>{
      this.customer = cust;
      console.log('cust data',cust);
      console.log(this.customer);
    })
  }

}
