import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {F1Service} from '../../services/f1.service';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Race} from '../../models/f1-rounds';

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

  season!: string;
  @Output() selectedRoundChange = new EventEmitter<string>();
  races$: Observable<Race[]> | undefined;
  selectedRound = '';

  constructor(private f1Service: F1Service) {
  }

  private getRounds() {
    if (this.season.length) {
      this.races$ = this.f1Service.getRounds(this.season);
    }
  }

  onRoundSelectionChange() {
    this.selectedRoundChange.emit(this.selectedRound);
  }

  @Input() set responseInput(resp: string) {
    if (resp && resp.length > 0) {
      this.season = resp;
      this.getRounds();
    } else {
      this.season = '';
    }
  }
}

