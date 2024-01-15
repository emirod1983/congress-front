import { Component, Input } from '@angular/core';
import { Senador } from '../../models/senador';
import { Diputado } from '../../models/diputado';

@Component({
  selector: 'representative-card',
  templateUrl: './representative-card.component.html',
  styleUrl: './representative-card.component.scss',
})
export class RepresentativeCardComponent {
  @Input() senadores: Senador[] = [];
  @Input() diputados: Diputado[] = [];
}
