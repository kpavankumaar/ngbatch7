import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  showAddressDetails:boolean = true;
  customersForm;
  
  // showOrHideAddress(){
  //     var verify = this.customersForm.get('verify');
  //     console.log(verify);
  //     this.showAddressDetails = verify.value
  // }
  constructor() { }
  
  ngOnInit() {
    // root form group
    this.customersForm = new FormGroup({
      firstName : new FormControl('Krishna'),
      lastName : new FormControl(''),
      emailName : new FormControl(''),
      verify:new FormControl(true),
      street : new FormControl(),
      city : new FormControl(),
      state : new FormControl(),
      zip : new FormControl(),
    });
    // console.log(this.customersForm.get('verify'))
    console.log(this.customersForm);
    this.showAddressDetails = this.customersForm.get('verify').value;
  }
}
