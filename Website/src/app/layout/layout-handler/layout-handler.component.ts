import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-layout-handler',
  templateUrl: './layout-handler.component.html',
  styleUrls: ['./layout-handler.component.scss']
})
export class LayoutHandlerComponent implements OnInit {
  public IsLoggedIn : boolean = false;
  public IsNotLoggedIn : boolean = true;

  constructor(private router: Router) { }

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
    const idToken = localStorage.getItem("id_token");
    this.IsLoggedIn = idToken !== null;
    this.IsNotLoggedIn = !this.IsLoggedIn;
  }

}
