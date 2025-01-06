import { Component } from '@angular/core';

@Component({
  selector: 'app-stocktransfer-add',
  templateUrl: './stocktransfer-add.component.html',
  styleUrls: ['./stocktransfer-add.component.scss']
})
export class StocktransferAddComponent {
  myList: any[] = [];
  ngOnInit() {
    this.myList.push({
      component: "",
      Quantity: "",
      UnitofMeasure: ""
    })
    console.log(this.myList);

  }
  addnew() {
    this.myList.push({
      component: "",
      Quantity: "",
      UnitofMeasure: ""
    })
  }
  _delete(i: any) {
    this.myList.splice(i, 1)
  }
}
