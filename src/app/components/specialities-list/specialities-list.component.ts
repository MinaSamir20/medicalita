import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-specialities-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './specialities-list.component.html',
  styleUrl: './specialities-list.component.scss',
})
export class SpecialitiesListComponent {
  specialities = [
    {
      image: 'https://3ayzdoctor.com/Site/NewStyle/imgs/findDrSpecialities/sp-dietitian@2x.jpg',
      name: 'Speciality 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-Tuwo8-2w9Q6qzV47SBplKMMsU38o8-c999lcjAA_7VmbpSNDGj8fnAnDV_J_kDqe_0&usqp=CAU',
      name: 'Speciality 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://cdn.lecturio.com/assets/Medical-specialties.jpg',
      name: 'Speciality 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-Tuwo8-2w9Q6qzV47SBplKMMsU38o8-c999lcjAA_7VmbpSNDGj8fnAnDV_J_kDqe_0&usqp=CAU',
      name: 'Speciality 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://cdn.lecturio.com/assets/Medical-specialties.jpg',
      name: 'Speciality 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
}
