import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginOrLogoutProp = 'Login';
  errorMessage;
  constructor( private dataService: DataService, public formBuilder: FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    console.log('ng on init');
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.formBuilder.group({
        email:      ['', [ Validators.required]],
        password:   ['', [ Validators.required]]
    });
  }
  submit({ value, valid }: { value, valid: boolean }) {
    this.dataService.login(value).subscribe(function(resp){
      if(resp){
        this.authService.loggedIn = true;
        this.loginOrLogoutProp = 'Logout';
      }else{
        this.authService.loggedIn = false;
        this.loginOrLogoutProp = 'Login';
      }
    })
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
