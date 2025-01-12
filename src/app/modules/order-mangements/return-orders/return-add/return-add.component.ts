import { Component } from '@angular/core';

@Component({
  selector: 'app-return-add',
  templateUrl: './return-add.component.html',
  styleUrls: ['./return-add.component.scss']
})
export class ReturnAddComponent {
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
