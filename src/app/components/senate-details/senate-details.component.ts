import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Senador } from '../../models/senador';
import { CongressService } from '../../services/congress.service';

@Component({
  selector: 'app-senate-details',
  templateUrl: './senate-details.component.html',
  styleUrl: './senate-details.component.scss'
})
export class SenateDetailsComponent {
  senator: Senador | undefined;
  idUrl = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  constructor(private route: ActivatedRoute, private congressService: CongressService) {}

  ngOnInit(): void {
    this.GetSenator();
  }

  GetSenator(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.congressService.getSenator(id).subscribe((senator) => (this.senator = senator));
  }
}
