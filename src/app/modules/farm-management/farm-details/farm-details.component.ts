import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmService } from 'src/app/services/farm/farm.service';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent implements OnInit {
   farm: any;

  constructor(
    private route: ActivatedRoute,
    private farmService: FarmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFarm(id);
  }

  loadFarm(id: number) {
    this.farmService.getFarmById(id).subscribe(res => {
      this.farm = res;
    });
  }

  back() {
    this.router.navigate(['/agri/farms/list']);
  }
}
