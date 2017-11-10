import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethereal-estrella',
  templateUrl: './ethereal-estrella.component.html'
})
export class EtherealEstrellaComponent implements OnInit {

  constructor() { }

  public noFeature: boolean = true;
  public noTechSpecs: boolean = true;
  public noAbout: boolean = true;

  public isEstrella = true;

  products: any[] = [{
    header: {
      firstFrameImage: 'assets/images/products.component.images/estrella-images/estrella-first-frame.jpg',
      backgroundImage: 'assets/images/products.component.images/estrella-images/estrella-first-frame.jpg',
      productVideoSrc: 'assets/videos/products.component.videos/estrella-videos/estrella-video.mp4',
      productName: 'The Ethereal Ray',
      productTagLine: 'A dual extruder printer for your everyday 3D printing needs!',
      extraLine: 'Launching at CES 2018'
    },
    about: {
      productName: 'The Ethereal halo',
      details: [],
      pictures: {}
    },
    features: [],
    techSpecs: []
  }];

  ngOnInit() {
  }

}
