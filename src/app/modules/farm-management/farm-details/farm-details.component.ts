import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent {
   farms = [
    { id: 1, name: 'Farm 1', location: 'Hyderabad', fields: 3,   notes: 'Main cultivation farm near city outskirts' },
    { id: 2, name: 'Farm 2', location: 'Guntur', fields: 2, notes: 'Seasonal farm used for paddy crops' }
  ];

  farm: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.farm = this.farms.find(f => f.id === id);

    if (!this.farm) {
      this.router.navigate(['/scm/farms/list']);
    }
  }

  goBack() {
    this.router.navigate(['/scm/farms/list']);
  }

}
