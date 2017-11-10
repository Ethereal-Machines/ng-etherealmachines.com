import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
