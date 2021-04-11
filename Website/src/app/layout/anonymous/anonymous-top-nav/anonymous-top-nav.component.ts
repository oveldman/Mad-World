import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anonymous-top-nav',
  templateUrl: './anonymous-top-nav.component.html',
  styleUrls: ['./anonymous-top-nav.component.scss']
})
export class AnonymousTopNavComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
