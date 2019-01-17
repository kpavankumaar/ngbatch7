import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first class';
  color = 'grey';
  obj = {
    color:'green'
  };
  userEnteredValue:string;

  recieveData(val){
    console.log(val);
  }
  recieveDataFromInput(inputVal:string){
    this.userEnteredValue = inputVal;
  }
  data = ['red','green','blue']
}
