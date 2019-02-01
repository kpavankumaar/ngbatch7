import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
// function verifyRating(c:AbstractControl):{[key:string]:boolean} | null{
//   if(typeof(c.value)== 'number'  && c.value < 0 || c.value > 5){
//    return {range:true}
//   }
//   return null;
// }

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  showAddressDetails:boolean = true;
  customersForm;
  verifyRating(min,max){
    return function (c:AbstractControl):{[key:string]:boolean} | null {
      if(typeof(c.value)== 'number'  && c.value < min || c.value > max){
      return {range:true}
      }
      return null;
    }
}
  showOrHideAddress(){
      var verify = this.customersForm.get('verify');
      console.log('type of value ',typeof(verify.value) , verify.value);
      if(verify.value){
        this.showAddressDetails = false;
      }else{
        this.showAddressDetails = true;
      }
      
  }
  
  constructor() { }
  
  ngOnInit() {
    // root form group
    this.customersForm = new FormGroup({
      firstName : new FormControl('Krishna',[Validators.required,Validators.minLength(3)]),
      lastName : new FormControl(''),
      emailName : new FormControl(''),
      phone : new FormControl(''),
      rating : new FormControl('',this.verifyRating(0,5)),
      notification : new FormControl('email'),
      verify:new FormControl(true),
      street : new FormControl(),
      city : new FormControl(),
      state : new FormControl(),
      zip : new FormControl(),
    });
    console.log(this.customersForm.get('verify'))
    this.showAddressDetails = this.customersForm.get('verify').value;
    console.log('show address details ',this.showAddressDetails);
    

  }
  ngOnChange(){

    
    console.log(this.customersForm.get('notification').value);
  }
  setNotification(chooseNotificationType:string){
    var phoneControl = this.customersForm.get('phone');
    if(chooseNotificationType === 'text'){
      phoneControl.setValidators([Validators.required,Validators.minLength(10)]);
    }else{
      phoneControl.clearValidators()
    }
    phoneControl.updateValueAndValidity();
  }
}
