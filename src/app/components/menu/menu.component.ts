import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {RoundInputComponent} from '../round-input/round-input.component';
import {SeasonInputComponent} from '../season-input/season-input.component';
import {WinnersTableComponent} from '../winners-table/winners-table.component';
import {DriversInfoComponent} from '../drivers-info/drivers-info.component';

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
    DriversInfoComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  selectedSeason = '';
  selectedRound = '';
  winnersUrl = ''

  onRoundChange(round: string) {
    this.selectedRound = round
  }

  onSeasonChange(season: string) {
    this.selectedSeason = season
  }

  onWinnerChange(url: string) {
    this.winnersUrl = url
  }
}
