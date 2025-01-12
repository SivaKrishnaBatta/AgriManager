import { Component } from '@angular/core';

@Component({
  selector: 'app-invoices-add',
  templateUrl: './invoices-add.component.html',
  styleUrls: ['./invoices-add.component.scss']
})
export class InvoicesAddComponent {
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
