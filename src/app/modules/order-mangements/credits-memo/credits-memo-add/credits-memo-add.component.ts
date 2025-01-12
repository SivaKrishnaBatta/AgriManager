import { Component } from '@angular/core';

@Component({
  selector: 'app-credits-memo-add',
  templateUrl: './credits-memo-add.component.html',
  styleUrls: ['./credits-memo-add.component.scss']
})
export class CreditsMemoAddComponent {
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
