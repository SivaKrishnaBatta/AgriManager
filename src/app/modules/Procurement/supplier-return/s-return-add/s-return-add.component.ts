import { Component } from '@angular/core';

@Component({
  selector: 'app-s-return-add',
  templateUrl: './s-return-add.component.html',
  styleUrls: ['./s-return-add.component.scss']
})
export class SReturnAddComponent {
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
