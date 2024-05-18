import { PublicModule } from './public.module';
import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { DoctorsListComponent } from '../components/doctors-list/doctors-list.component';
import { RatesComponent } from '../components/rates/rates.component';
import { OffersListComponent } from '../components/offers-list/offers-list.component';
import { ServiceListComponent } from '../components/service-list/service-list.component';
import { SpecialitiesListComponent } from '../components/specialities-list/specialities-list.component';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    DoctorsListComponent,
    RatesComponent,
    OffersListComponent,
    ServiceListComponent,
    SpecialitiesListComponent
  ],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {}
