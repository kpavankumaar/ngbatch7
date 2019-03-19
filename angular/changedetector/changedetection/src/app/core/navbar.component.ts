import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnChanges {
  @Input() data;
  @Output() eventEmitter = new EventEmitter();
  ngOnChanges(){
    console.log('printing the data from navbar component ngOnchanges');
  }
  ngOnInit() {
    console.log('printing the data from navbar component ngOnInit');
  }
  constructor(){
    console.log('printing the data from navbar component contructor');
  }
}
