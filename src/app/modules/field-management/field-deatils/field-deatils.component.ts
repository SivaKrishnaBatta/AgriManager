import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldService } from 'src/app/services/field/field.service';

@Component({
  selector: 'app-field-deatils',
  templateUrl: './field-deatils.component.html',
  styleUrls: ['./field-deatils.component.scss']
})
export class FieldDeatilsComponent implements OnInit {

 fieldId!: number;
  field: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fieldService: FieldService
  ) {}

  ngOnInit(): void {
    this.fieldId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFieldDetails();
  }

  loadFieldDetails(): void {
    this.fieldService.getFieldById(this.fieldId).subscribe({
      next: (res: any) => {
        this.field = res.data;
      },
      error: () => {
        this.router.navigate(['/agri/fields/list']);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/agri/fields/list']);
  }

  editField(): void {
    this.router.navigate(['/agri/fields/edit', this.fieldId]);
  }
}
