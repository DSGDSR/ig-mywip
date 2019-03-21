import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SupplierMgtComponent } from './pages/supplier-mgt/supplier-mgt.component';
import { CourtesyCarComponent } from './pages/courtesy-car/courtesy-car.component';
import { PickupComponent } from './pages/pickup/pickup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'supplier-mgt', component: SupplierMgtComponent },
  { path: 'courtesy-car', component: CourtesyCarComponent },
  { path: 'pickup', component: PickupComponent },
  { path: '*', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
