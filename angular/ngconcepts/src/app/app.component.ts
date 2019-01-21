import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('username') username1:ElementRef;
  title = 'first class';
  color = 'grey';
  obj = {
    color:'green'
  };
  username = 'john'
  userEnteredValue:string;

  recieveData(val){
    console.log(val);
  }
  recieveDataFromInput(inputVal:string){
    this.userEnteredValue = inputVal;
    console.log(this.username1.nativeElement.value);
  }
  data = ['red','green','blue']
}
