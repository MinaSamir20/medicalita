import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-offers-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.scss'
})
export class OffersListComponent {

}
