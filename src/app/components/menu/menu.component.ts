import {Component, inject} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {RoundInputComponent} from '../round-input/round-input.component';
import {SeasonInputComponent} from '../season-input/season-input.component';
import {WinnersTableComponent} from '../winners-table/winners-table.component';
import {DriversInfoComponent} from '../drivers-info/drivers-info.component';
import {PodiumComponent} from '../podium/podium.component';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    RoundInputComponent,
    SeasonInputComponent,
    WinnersTableComponent,
    DriversInfoComponent,
    PodiumComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  f1Service = inject(F1Service)
}
