import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app';
  validation:boolean;
  dataFromNavBar(data){
    console.log('data recieved from navbar in appcomponent',data);
    this.validation = data;
  }
  ngOnChanges(){
    console.log('printing the data from appcomponent ngOnChanges');
  }
  constructor(){
    console.log('printing the data from appcomponent contructor');
  }
  ngOnInit(){
    console.log('printing the data from appcomponent ngOnInit');
  }
  ngDoCheck(){
    console.log('printing the data from appcomponent ngDoCheck');
  }
}
