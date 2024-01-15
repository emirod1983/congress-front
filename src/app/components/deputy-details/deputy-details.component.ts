import { Component } from '@angular/core';
import { CongressService } from '../../services/congress.service';
import { ActivatedRoute } from '@angular/router';
import { Diputado } from '../../models/diputado';

@Component({
  selector: 'app-deputy-details',
  templateUrl: './deputy-details.component.html',
  styleUrl: './deputy-details.component.scss',
})
export class DeputyDetailsComponent {
  deputy: Diputado | undefined;
  idUrl = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  constructor(private route: ActivatedRoute, private congressService: CongressService) {}

  ngOnInit(): void {
    this.getDeputy();
  }

  getDeputy(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.congressService.getDeputy(id).subscribe((deputy) => (this.deputy = deputy));
  }
}
