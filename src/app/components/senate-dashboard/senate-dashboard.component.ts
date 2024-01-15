import { Component } from '@angular/core';
import { CongressService } from '../../services/congress.service';
import { Senador } from '../../models/senador';

@Component({
  selector: 'app-senate-dashboard',
  templateUrl: './senate-dashboard.component.html',
  styleUrl: './senate-dashboard.component.scss'
})
export class SenateDashboardComponent {
  senators: Senador[] = [];

  constructor(private congressService: CongressService) { }

  ngOnInit() {
    this.congressService.getSenators().subscribe((data: Senador[]) => {
      this.senators = data;
    });
  }
}
