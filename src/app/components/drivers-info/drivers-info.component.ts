import {Component, inject} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-drivers-info',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './drivers-info.component.html',
  styleUrl: './drivers-info.component.scss'
})
export class DriversInfoComponent {
  f1Service = inject(F1Service)

}
