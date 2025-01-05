import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-memo-add',
  templateUrl: './credit-memo-add.component.html',
  styleUrls: ['./credit-memo-add.component.scss']
})
export class CreditMemoAddComponent {
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
