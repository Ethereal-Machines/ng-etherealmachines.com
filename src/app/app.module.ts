import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompanyComponent } from './company/company.component';
import { ProductsComponent } from './products/products.component';
import { EtherealHaloComponent } from './products/ethereal-halo/ethereal-halo.component';
import { EtherealPentagramComponent } from './products/ethereal-pentagram/ethereal-pentagram.component';
import { EtherealEstrellaComponent } from './products/ethereal-estrella/ethereal-estrella.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { PressReleaseComponent } from './media/press-release/press-release.component';
import { ConcretePrinterPressReleaseComponent } from './media/concrete-printer-press-release/concrete-printer-press-release.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/halo', component: EtherealHaloComponent },
  { path: 'products/pentagram', component: EtherealPentagramComponent },
  { path: 'products/ray', component: EtherealEstrellaComponent },
  { path: 'contact-us/general-queries', component: ContactUsComponent },
  { path: 'contact-us/careers', component: ContactUsComponent },
  { path: 'contact-us/media-enquiries', component: ContactUsComponent },
  { path: 'contact-us/become-a-reseller-distributor', component: ContactUsComponent },
  { path: 'contact-us/concrete-3d-printer', component: ContactUsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'media', component: MediaComponent },
  { path: 'media/press-release', component: PressReleaseComponent },
  { path: 'media/concrete-printer-press-release', component: ConcretePrinterPressReleaseComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    CompanyComponent,
    ProductsComponent,
    EtherealHaloComponent,
    EtherealPentagramComponent,
    EtherealEstrellaComponent,
    HomeComponent,
    MediaComponent,
    PressReleaseComponent,
    ConcretePrinterPressReleaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
