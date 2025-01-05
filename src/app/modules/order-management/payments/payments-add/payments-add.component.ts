import { Component } from '@angular/core';

@Component({
  selector: 'app-payments-add',
  templateUrl: './payments-add.component.html',
  styleUrls: ['./payments-add.component.scss']
})
export class PaymentsAddComponent {
  myList: any[] = [];


  ngOnInit(){
    this.myList.push({
      component:"",
      Quantity:"",
      UnitofMeasure:""
    })
    console.log(this.myList);

  }

  addbom(){
    this.myList.push({
      component:"",
      Quantity:"",
      UnitofMeasure:""
    })
  }
  _delete(i:any){
    this.myList.splice(i,1)
  }


}
