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
    this.route.parent.params.subscribe(function(params){
      console.log(params);
      this.dataService.getCustomer(params['id']).subscribe(function(cust){
        this.customer = cust;
        console.log(cust);
        console.log(this.customer);
      })

    })
  }

}
