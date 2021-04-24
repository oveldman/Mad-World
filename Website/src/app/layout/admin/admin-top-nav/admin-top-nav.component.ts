import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-top-nav',
  templateUrl: './admin-top-nav.component.html',
  styleUrls: ['./admin-top-nav.component.scss']
})
export class AdminTopNavComponent implements OnInit {
  public isMenuCollapsed: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
