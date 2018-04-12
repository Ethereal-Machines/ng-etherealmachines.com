import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  public natureOfEnquiry: string;
  public tagline: string;
  public showContactNum: boolean = false;
  public showStates: boolean = false;
  public showScope: boolean = false;
  public currentScope: string;

  public tagLines = {
    concrete3dPrinter: 'To collaborate with us on Concrete 3d Printing!',
    generalQueries: 'Fill in your details for any general queries!',
    careers: 'Write to us for career opportunities!',
    mediaEnquiries: 'Write to us for media enquiries!',
    becomeReseller: 'Write to us to become a reseller or distributor!'
  };

  onScopeChange (e) {
    this.currentScope = e.target.value;
    if (this.currentScope === 'International') {
      // console.log('Scope is ', this.currentScope, this.showStates);
      this.showStates = false;
    } else if (this.currentScope === 'India') {
      // console.log('Scope is ', this.currentScope, this.showStates);
      this.showStates = true;
    }
  }

  changeContentOnLinkChange() {
    const link: string = window.location.pathname;

    if (link.indexOf('general-queries') !== -1) {
      this.natureOfEnquiry = 'General Queries';
      this.tagline = this.tagLines.generalQueries;
      // this.showStates = false;
      this.showScope = true;
      setTimeout(() => {
        $('#scope').change(this.onScopeChange.bind(this));
      }, 1000);
    } else if (link.indexOf('careers') !== -1) {
      this.natureOfEnquiry = 'Careers';
      this.tagline = this.tagLines.careers;
    } else if (link.indexOf('media-enquiries') !== -1) {
      this.natureOfEnquiry = 'Media Enquiries';
      this.tagline = this.tagLines.mediaEnquiries;
    } else if (link.indexOf('become-a-reseller-distributor') !== -1) {
      this.natureOfEnquiry = 'Becoming a reseller/distributor';
      this.tagline = this.tagLines.becomeReseller;
      this.showContactNum = true;
    } else if (link.indexOf('concrete-3d-printer') !== -1) {
      this.natureOfEnquiry = 'Concrete 3d Printing';
      this.tagline = this.tagLines.concrete3dPrinter;
    }
  }

  ngOnInit() {
    this.changeContentOnLinkChange();
  }
}
