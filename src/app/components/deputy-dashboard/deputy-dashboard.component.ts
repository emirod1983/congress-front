import { Component } from '@angular/core';
import { CongressService } from '../../services/congress.service';
import { Diputado } from '../../models/diputado';

@Component({
  selector: 'app-deputy-dashboard',
  templateUrl: './deputy-dashboard.component.html',
  styleUrl: './deputy-dashboard.component.scss'
})
export class DeputyDashboardComponent {
  deputies: Diputado[] = [];

  constructor(private congressService: CongressService) { }

  ngOnInit() {
    this.congressService.getDeputies().subscribe((data: Diputado[]) => {
      this.deputies = data;
    });
  }
}
