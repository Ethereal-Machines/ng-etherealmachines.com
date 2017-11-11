import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnInit {

  constructor(private router: Router) { }

  public contents: any[] = [{
    imgLink: 'assets/images/media.component.images/press-release.jpg',
    mediaLink: '/media/press-release',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    isPartOfApp: true,
    heading: 'CES 2018 - Best of Innovation Award',
    date: 'November 2017',
    publisher: 'CES'
  }, {
    imgLink: 'assets/images/media.component.images/documentry.jpg',
    mediaLink: 'https://youtu.be/6dun2zbYJmc',
    heading: 'Documentary by Govt.of India',
    btnTitle: 'Play',
    isMediaPlayble: true,
    isPartOfApp: false,
    date: 'August 2016',
    publisher: 'YouTube'
  }, {
    imgLink: 'assets/images/media.component.images/your-story.jpg',
    mediaLink: 'https://yourstory.com/2015/09/ethereal-machines/',
    heading: '63 rejections to break even',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    isPartOfApp: false,
    date: 'September 2015',
    publisher: 'YOURSTORY'
  }];

  public isModalOpen: boolean = false;
  public isPressReleaseModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  loadPressRelease() {
    this.router.navigate(['media/press-release']);
  }

  ngOnInit() {
  }

}
