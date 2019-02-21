import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showCustomersPage;
  recieveInfoFromChildComp(val){
    console.log(val);
    this.showCustomersPage = val;
  }
  constructor(private data:DataService){

  }
}
