import { Component } from '@angular/core';

@Component({
  selector: 'app-po-add',
  templateUrl: './po-add.component.html',
  styleUrls: ['./po-add.component.scss']
})
export class PoAddComponent {
  
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
