import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { DoctorsListComponent } from '../components/doctors-list/doctors-list.component';
import { OffersListComponent } from '../components/offers-list/offers-list.component';
import { RatesComponent } from '../components/rates/rates.component';
import { ServiceListComponent } from '../components/service-list/service-list.component';
import { SpecialitiesListComponent } from '../components/specialities-list/specialities-list.component';

const components = [
  DoctorsListComponent,
  OffersListComponent,
  RatesComponent,
  ServiceListComponent,
  SpecialitiesListComponent,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
