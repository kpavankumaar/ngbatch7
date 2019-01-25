import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
  customersForm;
  ngOnInit() {
    // root form group
    this.customersForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      emailName : new FormControl(),
      street : new FormControl(),
      city : new FormControl(),
      state : new FormControl(),
      zip : new FormControl(),
    });
  }

}
