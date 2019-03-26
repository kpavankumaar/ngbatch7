import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @ViewChild('customerForm') customerForm
  id;
  customer ={
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: {
      abbreviation: '',
      name: ''
    }
  };
  states;
  operationText = "Insert";
  constructor(private route:ActivatedRoute, private dataService:DataService, private router:Router) { }

  ngOnInit() {
    console.log(this.route); 
    this.route.parent.params.subscribe((params)=>{
      this.id =  params['id'];
      console.log();
    })
    
    this.dataService.getCustomer(this.id).subscribe((data) => {
        console.log(data);
        this.customer = data;
        this.operationText = 'Update';
      } 
    )
    this.dataService.getStates().subscribe((data)=>{
      this.states = data;
    })
    
  }
  cancel(){
    this.router.navigate(['/customers']);
  }
  submit(){
    console.log('customerForm', this.customerForm);
    this.dataService.updateCustomer(this.customer).subscribe(
      (res)=>{console.log('inserted customer', res)});
  }
  delete(event:Event){
    this.dataService.deleteCustomer(this.customer.id).subscribe((status:boolean)=>{
      if(status){
        this.router.navigate(['/customers']);
      }
    }
    )
  }
}
