import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmService } from 'src/app/services/farm/farm.service';

@Component({
  selector: 'app-farms-list',
  templateUrl: './farms-list.component.html',
  styleUrls: ['./farms-list.component.scss']
})
export class FarmsListComponent implements OnInit {
   farms: any[] = [];

  constructor(
    private farmService: FarmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFarms();
  }

  loadFarms() {
    this.farmService.getFarms().subscribe(res => {
      this.farms = res;
    });
  }

  addFarm() {
    this.router.navigate(['/agri/farms/add']);
  }

  editFarm(id: number) {
    this.router.navigate(['/agri/farms/edit', id]);
  }
  viewFarm(id: number) {
  this.router.navigate(['/agri/farms/view', id]);
}

}
