import { Component, Input } from '@angular/core';
import { rates } from './rate-data.model';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-rates',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.scss',
})
export class RatesComponent {
  rates = rates;
  images = [
    {
      stars: 5,
      comment: 'very good service from nature',
      userName: 'Mazen Rafik',
    },
    {
      stars: 3,
      comment: 'this is a usefull application',
      userName: 'Hossam Kamal',
    },
    {
      stars: 4,
      comment: 'Hello, I wanna thank you for this App',
      userName: 'Ahmed Elshamy',
    },
    {
      stars: 2,
      comment: 'it is too much time to use it',
      userName: 'Mohamed Ali',
    },
  ];
}
