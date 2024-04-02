import {Component, Input} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {Observable} from 'rxjs';
import {Race} from '../../models/f1-results';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-winners-table',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './winners-table.component.html',
  styleUrl: './winners-table.component.scss'
})
export class WinnersTableComponent {
  selectedSeason!: string;
  selectedRound !: string;
  results$: Observable<Race[]> | undefined;

  constructor(private f1Service: F1Service) {

  }

  getResults() {
    if (this.selectedSeason.length && this.selectedRound.length) {
      this.results$ = this.f1Service.getRaceResults(this.selectedSeason, this.selectedRound);


    }
  }

  @Input() set responseInputSeason(resp: string) {
    if (resp && resp.length > 0) {
      this.selectedSeason = resp;
      this.getResults()
    } else {
      this.selectedSeason = '';
    }
  }

  @Input() set responseInputRound(resp: string) {
    if (resp && resp.length > 0) {
      this.selectedRound = resp;
      this.getResults()
    } else {
      this.selectedRound = '';
    }
  }
}
