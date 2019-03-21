import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './skeleton/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SupplierMgtComponent } from './pages/supplier-mgt/supplier-mgt.component';
import { PickupComponent } from './pages/pickup/pickup.component';
import { CourtesyCarComponent } from './pages/courtesy-car/courtesy-car.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    SupplierMgtComponent,
    PickupComponent,
    CourtesyCarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
