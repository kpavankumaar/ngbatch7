import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.css']
})
export class CustomersGridComponent implements OnInit {

  @Input() customers = [];

  constructor() { }

  ngOnInit() {

  }

  sort(prop: string) {
    console.log(prop);
    // this.sorterService.sort(this.customers, prop);
  }

}
