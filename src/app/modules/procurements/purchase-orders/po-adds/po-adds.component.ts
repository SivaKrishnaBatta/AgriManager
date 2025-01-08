import { Component } from '@angular/core';

@Component({
  selector: 'app-po-adds',
  templateUrl: './po-adds.component.html',
  styleUrls: ['./po-adds.component.scss']
})
export class PoAddsComponent {
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
