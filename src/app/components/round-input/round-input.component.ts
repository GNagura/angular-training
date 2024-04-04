import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {AsyncPipe} from '@angular/common';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-round-input',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    AsyncPipe,
    MatLabel
  ],
  templateUrl: './round-input.component.html',
  styleUrl: './round-input.component.scss'
})
export class RoundInputComponent {

  f1Service = inject(F1Service)

  constructor() {
    this.f1Service.getRounds()
  }

}

