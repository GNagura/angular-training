import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {RoundInputComponent} from '../round-input/round-input.component';
import {SeasonInputComponent} from '../season-input/season-input.component';
import {WinnersTableComponent} from '../winners-table/winners-table.component';

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
    WinnersTableComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  selectedSeason = '';
  selectedRound = ''


  onRoundChange(round: string) {
    this.selectedRound = round
  }

  onSeasonChange(season: string) {
    this.selectedSeason = season
  }

}
