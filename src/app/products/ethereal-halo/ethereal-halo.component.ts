import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethereal-halo',
  templateUrl: './ethereal-halo.component.html'
})
export class EtherealHaloComponent implements OnInit {

  constructor() { }

  public noFeature: boolean = false;
  public noTechSpecs: boolean = false;
  public noAbout: boolean = false;

  public isHalo = true;

  products: any[] = [{
    header: {
      firstFrameImage: 'assets/images/products.component.images/halo-images/halo-first-frame.jpg',
      backgroundImage: 'assets/images/products.component.images/estrella-images/halo-first-frame.jpg',
      productVideoSrc: 'assets/videos/products.component.videos/halo-videos/halo-video.mp4',
      productName: 'The Ethereal Halo',
      productTagLine: 'The Dawn of Hybrid Manufacturing'
    },
    about: {
      productName: 'The Ethereal Halo',
      details: [
        'The Ethereal Halo has been designed to bring about a metamorphosis to the world of manufacturing and kick off the concept of hybrid manufacturing. Ethereal Halo is the world’s first consumer oriented 5-axis 3-D printer and 5-axis CNC Router.',

        'Ethereal Halo is a machine that introduces Hybrid Manufacturing to the world and combines both the technologies of subtractive manufacturing and additive manufacturing into one bundle, with a high degree of accuracy.',

        'The Halo can equip an entire spectrum ranging from the hobbyist to an industry with quick prototyping and manufacturing abilities. A 5-axis printer and a 5-axis CNC Router bundled up into one single affordable machine heralds the future.'
      ],
      pictures: {
        defaultImage: 'assets/images/products.component.images/halo-images/product-images/halo--small.png',
        smallSizeImage: 'assets/images/products.component.images/halo-images/product-images/halo--small.png',
        mediumSizeImage: 'assets/images/products.component.images/halo-images/product-images/halo--medium.png',
        largeSizeImage: 'assets/images/products.component.images/halo-images/product-images/halo--large.png',
        largerSizeImage: 'assets/images/products.component.images/halo-images/product-images/halo--larger.png'
      }
    },
    features: [{
      featureImage: 'assets/images/products.component.images/halo-images/features/feat-1.svg',
      altNameForImage: 'Feature Image',
      featureName: 'ADDITIVE + SUBTRACTIVE MANUFACTURING',
      featureDetail: 'Freedom to switch between the two processes at any point'
    }, {
      featureImage: 'assets/images/products.component.images/halo-images/features/feat-2.svg',
      altNameForImage: 'Feature Image',
      featureName: 'DESKTOP SIZE',
      featureDetail: 'Designed and engineered to occupy minimal floor space.'
    }, {
      featureImage: 'assets/images/products.component.images/halo-images/features/feat-3.svg',
      altNameForImage: 'Feature Image',
      featureName: '5-AXIS SIMULTANEOUS KINEMATICS',
      featureDetail: '5 axis simulatneous movement to help reduce machining time.'
    }, {
      featureImage: 'assets/images/products.component.images/halo-images/features/feat-4.svg',
      altNameForImage: 'Feature Image',
      featureName: 'HIGH ACCURACY DRIVE MECHANISM',
      featureDetail: 'Achieved through utilization of highly accurately calibrated ball screws and linear guide rails.'
    }, {
      featureImage: 'assets/images/products.component.images/halo-images/features/feat-5.svg',
      altNameForImage: 'Feature Image',
      featureName: 'DEDICATED PC-BASED CONTROLLER',
      featureDetail: 'Real time monitoring and control of the machining / printing job in progress.'
    }, {
      featureImage: 'assets/images/products.component.images/halo-images/features/feat-6.svg',
      altNameForImage: 'Feature Image',
      featureName: 'ADVANCED NOZZLE DESIGN',
      featureDetail: 'Ensures zero clogging and smooth filament deposition'
    }, {
      featureImage: 'assets/images/products.component.images/halo-images/features/feat-7.svg',
      altNameForImage: 'Feature Image',
      featureName: 'MULTIPLE MATERIAL SUPPORT',
      featureDetail: 'Flexibility to use numerous materials to machine or 3D print'
    }, {
      featureImage: 'assets/images/products.component.images/halo-images/features/feat-8.svg',
      altNameForImage: 'Feature Image',
      featureName: 'MULTIPLE TOOL SUPPORT',
      featureDetail: 'Permits employment of various tools to machine a spectrum of materials.'
    }],

    techSpecs: [{
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-1.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'WORK AREA',
      techSpecDetail: '150 dia x 150 mm'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-2.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'FOOTPRINT',
      techSpecDetail: '900 x 900 mm'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-3.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'ACCURACY',
      techSpecDetail: '60 microns'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-4.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'LOAD BEARING CAPACITY',
      techSpecDetail: '8kgs'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-5.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'SUBTRACTIVE MANUFACTURING MATERIALS',
      techSpecDetail: 'Choice of a plethora of materials'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-6.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'ADDITIVE MANUFACTURING MATERIALS',
      techSpecDetail: 'Supports most 3D printing filaments'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-7.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'EXTRUSION MECHANISM',
      techSpecDetail: 'Geared Direct Drive Extruder'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-8.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'SPINDLE',
      techSpecDetail: '800W, DC motor, ER-11 tool holder'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-9.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'FILAMENT DIAMETER',
      techSpecDetail: '1.75 mm'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-10.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'EXTRUDER TEMPERATURE',
      techSpecDetail: 'Upto 350° Celsius'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-11.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'WORKING SPEED',
      techSpecDetail: '1800mm/min'
    }, {
      techSpecImage: 'assets/images/products.component.images/halo-images/tech-specs/tech-12.svg',
      altNameForImage: 'Tech Spec Image',
      techSpecName: 'POWER SUPPLY',
      techSpecDetail: '2.5 kW'
    }]
  }];

  public isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit() {
  }

}
