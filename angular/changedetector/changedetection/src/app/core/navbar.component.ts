import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnChanges {
  @Input() data;
  @Output() eventEmitter = new EventEmitter();
  validation:boolean = true;
  testMethod(){
    console.log('test method from navbarcomponent',this.validation)
    this.validation = this.validation == true ? false : true;
    this.eventEmitter.emit(this.validation);
  }

  // lifecycle hooks
  ngOnChanges(){
    console.log('printing the data from navbar component ngOnchanges');
  }
  ngOnInit() {
    console.log('printing the data from navbar component ngOnInit');
  }
  ngDoCheck(){
    console.log('printing the data from navbar component ngDoCheck');
  }
  constructor(){
    console.log('printing the data from navbar component contructor');
  }
}
