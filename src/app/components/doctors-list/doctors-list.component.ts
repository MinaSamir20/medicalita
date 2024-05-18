import { Component } from '@angular/core';
import { DoctorsList } from './fake-data.model';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.scss'
})
export class DoctorsListComponent {
  doctors = DoctorsList;

}
