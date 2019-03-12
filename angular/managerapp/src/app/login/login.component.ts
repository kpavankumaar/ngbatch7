import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginOrLogoutProp = 'Login';
  authenticationResponse:boolean;
  errorMessage;
  constructor( private dataService: DataService, private authService:AuthService, public formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    console.log('ng on init' , this.authService.loggedIn);
    this.buildForm();
  }
  
  buildForm() {
    this.loginForm = this.formBuilder.group({
        email:      ['', [ Validators.required]],
        password:   ['', [ Validators.required]]
    });
  }
  
  submit({ value, valid }: { value, valid: boolean }) {
    console.log('auth service',this.authService.loggedIn);
   
    this.dataService.login(value).subscribe((resp) => {
      if(resp){
        this.authService.loggedIn = true;
        this.router.navigate(['./customers'])
      }else{
        this.authService.loggedIn = false;
        
      }
      console.log('resp',resp);
      
    })
    console.log('authenticationResponse', this.authenticationResponse);
    
    // console.log(this.authService.redirectUrl);
    
    // this.dataService.login(value).subscribe((status: boolean) => {
    //         if (status) {
    //           console.log('this.authservice.redirecturl',this.authService.redirectUrl, typeof this.authService.redirectUrl, 'id', this.authService.id);
    //           if(this.authService.redirectUrl){
    //             // update the login status in authService.loggedIn 
    //             // if you fail to do this canActivate method will redirect to login page 
    //             // because canActivate routeGaurd will stop from loading the edit page
    //             this.authService.logedIn = status;
    //             const url = this.authService.redirectUrl;
    //             this.authService.redirectUrl = ""
    //             this.router.navigateByUrl(url);
    //           }else{
    //             this.router.navigate(['/customers']);
    //           }
              
    //         }else{
    //           console.log('unable to login');
    //         }
    //     })
    };

}
