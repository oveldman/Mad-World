import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthenticationService } from './../../../services/api/authentication/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showError : boolean = false;
  public IsLoggedIn : boolean = false;
  public IsNotLoggedIn : boolean = true;
  form:FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { 
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.checkIsLogin();
  }

  login(customerData: any) {
    if (customerData.username && customerData.password) {
      this.authenticationService.login(customerData.username, customerData.password).subscribe(bearer => {
        this.showError = !bearer.Succes;

        if (bearer.Succes) {
          this.checkIsLogin();
        } 
      });
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');  
  }

  private checkIsLogin() {
    const idToken = localStorage.getItem("id_token");
    this.IsLoggedIn = idToken !== null;
    this.IsNotLoggedIn = !this.IsLoggedIn;
  }
}
