import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.scss'
})
export class PodiumComponent {

  podiumRacers!: string[]

  @Input() set responseInputRacers(resp: string[]) {
    this.podiumRacers = resp
  }
}
