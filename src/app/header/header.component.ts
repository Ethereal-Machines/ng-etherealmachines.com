import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public isIn = false;

  toggleState() {
    let bool: boolean = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  ngOnInit() {}
}
