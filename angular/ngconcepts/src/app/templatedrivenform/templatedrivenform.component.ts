import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  formDetails(formDetails){
    console.log(formDetails);
  }
  constructor() { }

  ngOnInit() {
  }

}
