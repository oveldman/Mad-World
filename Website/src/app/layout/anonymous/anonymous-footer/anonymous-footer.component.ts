import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anonymous-footer',
  templateUrl: './anonymous-footer.component.html',
  styleUrls: ['./anonymous-footer.component.scss']
})
export class AnonymousFooterComponent implements OnInit {
  public currentYear: number = 2021; 

  constructor() { }

  ngOnInit(): void {
    this.currentYear = (new Date()).getFullYear();
  }

}
