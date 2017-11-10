import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const container = $('body');
    container.removeClass('padding-on').addClass('padding-off');
  }

  loadHaloPage() {
    this.router.navigate(['products/halo']);
  }

}
