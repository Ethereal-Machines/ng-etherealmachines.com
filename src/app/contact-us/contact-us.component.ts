import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  public natureOfEnquiry: string;
  public tagline: string;

  public tagLines = {
    generalQueries: 'Fill in your details for any general queries!',
    careers: 'Write to us for career opportunities!',
    mediaEnquiries: 'Write to us for media enquiries!',
    becomeReseller: 'Write to us to become a reseller or distributor!'
  };

  changeContentOnLinkChange() {
    const link: string = window.location.pathname;

    if (link.indexOf('general-queries') !== -1) {
      this.natureOfEnquiry = 'General Queries';
      this.tagline = this.tagLines.generalQueries;
    } else if (link.indexOf('careers') !== -1) {
      this.natureOfEnquiry = 'Careers';
      this.tagline = this.tagLines.careers;
    } else if (link.indexOf('media-enquiries') !== -1) {
      this.natureOfEnquiry = 'Media Enquiries';
      this.tagline = this.tagLines.mediaEnquiries;
    } else if (link.indexOf('become-a-reseller-distributor') !== -1) {
      this.natureOfEnquiry = 'Becoming a reseller/distributor';
      this.tagline = this.tagLines.becomeReseller;
    }
  }

  ngOnInit() {
    this.changeContentOnLinkChange();
  }

}
