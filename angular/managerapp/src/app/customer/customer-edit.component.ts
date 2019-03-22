import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id;
  customer;
  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    console.log(this.route); 
    this.route.parent.params.subscribe((params)=>{
      this.id =  params['id'];
      console.log();
    })
    
    this.dataService.getCustomer(this.id).subscribe((data) => {
        console.log(data);
        this.customer = data;
      } 
    )
    
  }

}
