import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-drivers-info',
  standalone: true,
  imports: [],
  templateUrl: './drivers-info.component.html',
  styleUrl: './drivers-info.component.scss'
})
export class DriversInfoComponent {
  winnersUrl = ''

  @Input() set responseWinnersUrl(resp: string) {
    this.winnersUrl = resp
  }
}
