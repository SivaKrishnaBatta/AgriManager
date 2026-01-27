import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farms-list',
  templateUrl: './farms-list.component.html',
  styleUrls: ['./farms-list.component.scss']
})
export class FarmsListComponent {
   farms = [
    { id: 1, name: 'Farm 1', location: 'Hyderabad', fields: 3 },
    { id: 2, name: 'Farm 2', location: 'Guntur', fields: 2 }
  ];

  constructor(private router: Router) {}

  addFarm() {
    this.router.navigate(['/scm/farms/manage']);
  }

  editFarm(id: number) {
    this.router.navigate(['/scm/farms/manage', id]);
  }

}
