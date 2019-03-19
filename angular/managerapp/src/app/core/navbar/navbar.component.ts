import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() eventCommFromNavTemp = new EventEmitter();
  // @Input() prop;
  toggleLoginout = 'Login'
  
  loadCustomersPage(){
    this.eventCommFromNavTemp.emit(true)
  }
  constructor(private router:Router, private authService:AuthService) {

  }
  ngOnChanges(){
    console.log('')
  }
  ngOnInit() {
    // add this code into loginorLogout function
    if(this.authService.loggedIn){
      // this.toggleLoginout = 'Logout';
    }else{
      // this.toggleLoginout = 'Login';
      this.router.navigate(['/login']);
    }
  }
  ngDoCheck(){
    this.loginOrLogout();
  }
  loginOrLogout(){
    console.log(this.authService.loggedIn);
    if(this.authService.loggedIn){
      this.toggleLoginout = 'Logout';
      console.log('successfully logedin');
    }else{
      this.toggleLoginout = 'Login';
      console.log('successfully logged out');
    //   this.router.navigate(['/login'])
    }
    
  }

}
