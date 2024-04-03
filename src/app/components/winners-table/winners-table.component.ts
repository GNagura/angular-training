import {Component, EventEmitter, Input, Output} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {Observable} from 'rxjs';
import {Race} from '../../models/f1-results';
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-winners-table',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow,
    NgIf
  ],
  templateUrl: './winners-table.component.html',
  styleUrl: './winners-table.component.scss'
})
export class WinnersTableComponent {
  selectedSeason!: string;
  selectedRound !: string;
  selectedRoundName !: string;
  results$: Observable<Race[]> | undefined;
  displayedColumns: string[] = ['position', 'driver', 'time', 'points'];
  @Output() winnersUrl = new EventEmitter<string>()


  public countryList: { [key: string]: string } = {
    American: 'US',
    Argentine: 'AR',
    Australian: 'AU',
    Austrian: 'AT',
    Belgian: 'BE',
    Brazilian: 'BR',
    British: 'GB',
    Canadian: 'CA',
    Colombian: 'CO',
    Danish: 'DK',
    Dutch: 'NL',
    Finnish: 'FI',
    French: 'FR',
    German: 'DE',
    Indonesian: 'ID',
    Irish: 'IE',
    Italian: 'IT',
    Japanese: 'JP',
    Mexican: 'MX',
    Monegasque: 'MC',
    'New Zealander': 'NZ',
    Russian: 'RU',
    'South African': 'ZA',
    Spanish: 'ES',
    Swedish: 'SE',
    Swiss: 'CH',
    Thai: 'TH',
    Venezuelan: 'VE',
    Polish: 'PL',
    Portuguese: 'PT'
  }

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

  @Input() set responseInputRoundName(resp: string) {
    if (resp && resp.length > 0) {
      this.selectedRoundName = resp;
    } else {
      this.selectedRoundName = '';
    }
  }

  setUrl(url: string) {
    this.winnersUrl.emit(url)
  }
}
