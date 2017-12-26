import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadGeneralQuery() {
    this.router.navigate(['contact-us/general-queries']);
  }

  loadCareers() {
    this.router.navigate(['contact-us/careers']);
  }

  loadMediaQuery() {
    this.router.navigate(['contact-us/media-enquiries']);
  }

  loadBecomeReseller() {
    this.router.navigate(['contact-us/become-a-reseller-distributor']);
  }

  loadConcretePrinterQuery() {
    this.router.navigate(['contact-us/concrete-3d-printer']);
  }
}
