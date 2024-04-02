import {Component, EventEmitter, inject, Output} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect} from '@angular/material/select';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-season-input',
  standalone: true,
  imports: [
    AsyncPipe,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect
  ],
  templateUrl: './season-input.component.html',
  styleUrl: './season-input.component.scss'
})
export class SeasonInputComponent {

  selectedSeason = ''
  @Output() selectedSeasonChange = new EventEmitter<string>()
  seasons$ = inject(F1Service).getSeasons()

  onSeasonSelectionChange() {
    this.selectedSeasonChange.emit(this.selectedSeason)
  }
}
