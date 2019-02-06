import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
// function verifyRating(c:AbstractControl):{[key:string]:boolean} | null{
//   if(typeof(c.value)== 'number'  && c.value < 0 || c.value > 5){
//    return {range:true}
//   }
//   return null;
// }
function verifyEmail (c:AbstractControl):{[key:string]:boolean}| null{
  
    if(c.get('emailName').value === c.get('confirmEmail').value){
      return null 
    }
    return {match:true}
  
}
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  showAddressDetails:boolean = true;
  customersForm:FormGroup;
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
  
  constructor( private fb:FormBuilder) { 
    
  }
  
  ngOnInit() {
    // root form group
    this.customersForm = this.fb.group({
      firstName : ['',[Validators.required,Validators.minLength(3)]],
      lastName : [],
      emailGroup: this.fb.group({
        emailName : ['',[Validators.required,Validators.email]],
        confirmEmail: ['',[Validators.required,Validators.email]],
      },verifyEmail),
      phone : [''],
      rating : ['',this.verifyRating(0,5)],
      notification : ['email'],
      verify:[true],
      street : [],
      city : [],
      state : [],
      zip : [],
    })
    // this.customersForm = new FormGroup({
    //   firstName : new FormControl('Krishna',[Validators.required,Validators.minLength(3)]),
    //   lastName : new FormControl(''),
    //   emailGroup: new FormGroup({
    //     emailName : new FormControl('',[Validators.required,Validators.email]),
    //     confirmEmail: new FormControl('',[Validators.required,Validators.email]),
    //   },verifyEmail),
    //   phone : new FormControl(''),
    //   rating : new FormControl('',this.verifyRating(0,5)),
    //   notification : new FormControl('email'),
    //   verify:new FormControl(true),
    //   street : new FormControl(),
    //   city : new FormControl(),
    //   state : new FormControl(),
    //   zip : new FormControl(),
    // });
    console.log(this.customersForm.get('verify'))
    this.showAddressDetails = this.customersForm.get('verify').value;
    console.log('show address details ',this.showAddressDetails);
    // this.customersForm.get('notification').valueChanges.subscribe((val)=>{
    //   console.log('notification changed', val);
    //   var phoneControl = this.customersForm.get('phone');
    //   if(val === 'phone'){
    //     phoneControl.setValidators([Validators.required,Validators.minLength(5)]);
    //   }else{
    //     phoneControl.clearValidators()
    //   }
    //   phoneControl.updateValueAndValidity();
    // });
    // compare emailName and confirmEmail
    
  }
  ngOnChange(){

    
    console.log(this.customersForm.get('notification').value);
  }
  setNotifications(chooseNotificationType:string){
    var phoneControl = this.customersForm.get('phone');
    if(chooseNotificationType === 'phone'){
      phoneControl.setValidators([Validators.required,Validators.minLength(5)]);
    }else{
      phoneControl.clearValidators()
    }
    phoneControl.updateValueAndValidity();
  }
}
