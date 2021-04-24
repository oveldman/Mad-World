import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthenticationService } from './../../services/api/authentication/authentication.service';

@Component({
  selector: 'app-layout-handler',
  templateUrl: './layout-handler.component.html',
  styleUrls: ['./layout-handler.component.scss']
})
export class LayoutHandlerComponent implements OnInit {
  public IsLoggedIn : boolean = false;
  public IsNotLoggedIn : boolean = true;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.subscribeOnRouteInit();
    this.checkIsLogin();
  }

  private subscribeOnRouteInit() {
    this.router.events.subscribe(_ => {
      this.checkIsLogin();
    });
  }

  private checkIsLogin() {
    this.IsLoggedIn = this.authenticationService.isUserLoggedIn();
    this.IsNotLoggedIn = !this.IsLoggedIn;
  }
}
